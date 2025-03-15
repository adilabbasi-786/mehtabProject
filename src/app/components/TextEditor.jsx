import {
  ClassicEditor,
  Context,
  Bold,
  Essentials,
  Italic,
  List,
  ContextWatchdog,
  Paragraph,
  Heading,
  Image,
  ImageToolbar,
  ImageUpload,
  Table,
  TableToolbar,
  Indent,
  Underline,
  Link,
  ImageResizeEditing,
  ListProperties,
  ImageResizeHandles,
  Font,
} from "ckeditor5";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import "ckeditor5/ckeditor5.css";
import "./TextEditor.css";

const TextEditor = ({ value, onChange }) => {
  return (
    <CKEditorContext context={Context} contextWatchdog={ContextWatchdog}>
      <CKEditor
        editor={ClassicEditor}
        config={{
          licenseKey: "GPL", // Replace with a commercial license key if required.
          plugins: [
            Essentials,
            Bold,
            Italic,
            Paragraph,
            List,
            ListProperties,
            Heading,
            Image,
            ImageToolbar,
            ImageUpload,
            Table,
            TableToolbar,
            Indent,
            Underline,
            Link,
            Font,
            ImageResizeEditing,
            ImageResizeHandles,
          ],
          toolbar: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "fontFamily", // Add font family to the toolbar
            "fontSize",
            "link",
            "uploadImage",
            "insertTable",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "outdent",
            "indent",
          ],
          image: {
            toolbar: [
              "imageTextAlternative",
              "|",
              "imageStyle:inline",
              "imageStyle:wrapText",
              "imageStyle:breakText",
            ],
            upload: {
              types: ["jpeg", "png", "gif", "jpg", "webp"],
            },
          },
          table: {
            contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
          },
          link: {
            addTargetToExternalLinks: true,
            defaultProtocol: "https://",
          },
          fontSize: {
            options: [9, 11, 13, "default", 17, 19, 21],
            supportAllValues: true,
          },
          list: {
            properties: {
              styles: true,
              startIndex: true,
              reversed: true,
            },
          },
        }}
        data={value || "<p>Start writing your blog post...</p>"}
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);

          // Set up the Cloudinary image upload adapter
          editor.plugins.get("FileRepository").createUploadAdapter = (
            loader
          ) => {
            return new CloudinaryUploadAdapter(loader);
          };
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log("Updated content:", data);
          if (onChange) {
            onChange(data);
          }
        }}
      />
    </CKEditorContext>
  );
};

// Cloudinary Upload Adapter
class CloudinaryUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then((file) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "Unified_Marketplace");

        fetch("https://api.cloudinary.com/v1_1/dz32y6il6/image/upload", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.secure_url) {
              resolve({
                default: data.secure_url,
              });
            } else {
              reject(data.error || "Upload failed");
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }

  abort() {
    // Abort upload if needed
  }
}

export default TextEditor;

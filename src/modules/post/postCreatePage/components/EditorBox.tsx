import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

const toolbar = [
  ["heading", "bold", "italic", "strike"],
  ["hr", "quote"],
  ["ul", "ol", "task", "indent", "outdent"],
  ["table", "image", "link"],
  ["code", "codeblock"],
  ["scrollSync"],
];

interface EditorBoxProps {
  editorRef: React.RefObject<Editor>;
}

function EditorBox({ editorRef }: EditorBoxProps) {
  const onChange = () => {
    const data = editorRef.current?.getInstance().getHTML();
    console.log(data);
  };

  // const onUploadImage = async (blob: any, callback: any) => {
  //   // const url = await uploadImage(blob);
  //   // callback(url, 'alt text');
  //   // return false;

  //   console.log(blob);
  // };

  return (
    <div className="edit_wrap">
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="1000px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        language="ko-KR"
        ref={editorRef}
        toolbarItems={toolbar}
        onChange={onChange}
        plugins={[colorSyntax]}
        // hooks={{
        //   addImageBlobHook: onUploadImage,
        // }}
      />
    </div>
  );
}

export default EditorBox;

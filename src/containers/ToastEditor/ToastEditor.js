import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { createRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';

const ToastEditor = () => {
  const editorRef = createRef();

  return (
    <>
      <Editor
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
        // hooks={{
        // addImageBlobHook: async (blob, callback) => {
        // const { src, alt } = await uploadImage(blob);
        // callback(src, alt);
        // return false;
        // },
        // }}
      />
    </>
  );
};

export default ToastEditor;

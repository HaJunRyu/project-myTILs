import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { createRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import styled from 'styled-components';

const TitleInput = styled(Input)`
  font-size: 2.75rem;
  width: 100%;
  display: block;
  outline: none;
  border: none;
  font-weight: bold;
  color: rgb(33, 37, 41);
  margin-bottom: 30px;
`;

const LeaveButton = styled(Button)`
  height: 2.5rem;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 30px;
`;

const PostButton = styled(Button)`
  height: 2.5rem;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 30px;
  position: absolute;
  right: 0;
  background: rgb(18, 184, 134);
  color: rgb(255, 255, 255);
`;

const EditorForm = styled.form`
  position: relative;
  max-width: 1440px;
  padding-top: 30px;
`;

const ToastEditor = () => {
  const editorRef = createRef();

  return (
    <EditorForm>
      <TitleInput id="title_input" label="" placeholder="제목을 입력하세요." type="text" />
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
        // return false;        // },
        // }}
      />
      <LeaveButton className="leaveButton" children="← 나가기" />
      <PostButton type="submit" className="postButton" children="게시" />
    </EditorForm>
  );
};

export default ToastEditor;

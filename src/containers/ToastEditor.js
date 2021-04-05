import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { createRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { createTilLoadingAsync } from 'store/modules/tils';

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
  const [subject, setSubject] = useState('');

  const editorRef = createRef();

  const dispatch = useDispatch();

  const onPostTilHandler = () => {
    dispatch(createTilLoadingAsync(subject, getContents()));
  };

  const getContents = () => {
    return editorRef.current.getInstance().getHtml();
  };

  const uploadImage = blob => {
    let formData = new FormData();
    formData.append('image', blob);

    return axios
      .post('http://15.165.145.100:3002/image_upload', formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(err => console.error(err));
  };

  const onInputHandler = e => {
    setSubject(e.target.value);
  };

  return (
    <EditorForm>
      <TitleInput
        id="title_input"
        label=""
        placeholder="제목을 입력하세요."
        type="text"
        onChange={onInputHandler}
      />
      <Editor
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
        hooks={{
          addImageBlobHook: async (blob, callback) => {
            const { src, alt } = await uploadImage(blob);
            callback(src, alt);
            return false;
          },
        }}
      />
      <LeaveButton className="leaveButton" children="← 나가기" />
      <PostButton type="button" className="postButton" children="게시" onClick={onPostTilHandler} />
    </EditorForm>
  );
};

export default ToastEditor;

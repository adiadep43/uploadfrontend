import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  renderDragMenssage = (isDragActive, isDragReject) => {
      if(!isDragActive){
          return <UploadMessage>Arraste Arquivos Aqui...</UploadMessage>
      }
      if(isDragReject){
        return <UploadMessage type="error">Arquivo Não Suportado!</UploadMessage>
      }
      return <UploadMessage type="success">Solte os Arquivos Aqui!</UploadMessage>
  };
    render() {
        const { onUpload } = this.props;

    return (
        <Dropzone accept="image/*" onDropAccepted={onUpload}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
                >
                    <input type="file" {...getRootProps()} />
                    {this.renderDragMenssage(isDragActive, isDragReject)}
                </DropContainer>
            )}
        </Dropzone>
    );
  }
}

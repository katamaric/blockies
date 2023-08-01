import React from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const NoteDisplay = ({ note }) => {
  const { title, content } = note;
  const htmlValue = converter.makeHtml(content);

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlValue }} />
    </div>
  );
};

export default NoteDisplay;

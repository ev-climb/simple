import React from 'react';
import { FaSmile } from 'react-icons/fa';
import { jsx, css, Global, ClassNames } from '@emotion/react';

const SmileyPicker = ({ onSelectSmiley }) => {
  return (
    // <div className="">
    //   <FaSmile onClick={() => onSelectSmiley(':)')} />
    //   {/* Добавьте другие компоненты иконок смайлов */}
    // </div>
    <div css={{ color: 'hotpink' }}>
      <div
        css={css`
          color: green;
        `}
      />
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <ClassNames>
        {({ css, cx }) => (
          <div
            className={cx(
              'some-class',
              css`
                color: yellow;
              `,
            )}
          />
        )}
      </ClassNames>
    </div>
  );
};
export default SmileyPicker;

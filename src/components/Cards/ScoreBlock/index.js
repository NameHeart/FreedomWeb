import React from 'react';
import cx from 'classnames';
// import PropTypes from 'prop-types'
import { ScoreBlockStyled } from './styled';
import { RenderCommaMoney } from 'utils/functions/FormatMoney';

const ScoreBlock = ({ theme_standard, label, value }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <ScoreBlockStyled>
      <div className={customClass}>
        <div className="score_block_container">
          <div className="sb_header">{label}</div>
          <div className="sb_body">{RenderCommaMoney(value, true)}</div>
        </div>
      </div>
    </ScoreBlockStyled>
  );
};

ScoreBlock.propTypes = {};

export default ScoreBlock;

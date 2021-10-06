import React, { PureComponent } from 'react';

import { labelByType } from '../constants/index';
import ProgressBar from '@ramonak/react-progress-bar';

import likes from '../assets/img/likes.png';
import comments from '../assets/img/comments.png';

const getProgressText = (progress) => {
  if (progress === 0) {
    return 'не пройден';
  }

  if (progress === 100) {
    return 'пройден';
  }

  if (progress === null) {
    return false;
  }

  return progress + '% пройдено';
};

export default class CardBase extends PureComponent {
  render() {
    const { element } = this.props;

    return (
      <div className="table__card">
        <div>
          <div className="table__img">
            {element.tags ? (
              <div className="table__badge-wrapper">
                {element.tags.map((tag) => (
                  <div className="table__badge">{tag}</div>
                ))}
              </div>
            ) : null}
            <img src={element.image} alt="" />
          </div>
          {typeof element.progress === 'number' || element.progress === null ? (
            <div>
              <div className="table__progress-title">
                <div>{labelByType[element.type]}</div>
                <div>{getProgressText(element.progress)}</div>
              </div>
              <div className="table__progress-bar">
                <ProgressBar
                  completed={element.progress}
                  bgColor="#6FCF97"
                  height={'4px'}
                  borderRadius={'10px'}
                  isLabelVisible={false}
                />
              </div>
            </div>
          ) : null}
          <div className="table__title">{element.name}</div>
        </div>
        <div>
          <div className="table__text">
            {element.date ? `Доступен до: ${element.date}` : element.description}
          </div>
        </div>
        {element.likes && element.comments ? (
          <div className="table__comments">
            <div>
              <img src={likes} alt="" /> {element.likes}
            </div>
            <div>
              <img src={comments} alt="" /> {element.comments}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

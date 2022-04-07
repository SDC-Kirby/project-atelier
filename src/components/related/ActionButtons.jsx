import React, {useState, useMemo} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import CompareModal from './CompareModal.jsx';
import {getFeatures} from './RelatedHelpers.js';

const CompareButton = ({card, current}) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  }
  const features = useMemo(() =>
    getFeatures(current, card),
    [card.id, current.id]);

  return (
    <div className="compare-button">
      <AiOutlineStar onClick={openModal} />
      {modal ? <CompareModal features={features} closeModal={() => setModal(false)} /> : null }
    </div>
  );
};

const removeButton = ({card}) => {

  return (
    <div className="remove-button">

    </div>
  );
};

export {CompareButton, removeButton};
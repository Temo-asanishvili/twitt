import React from "react";
import { useState, useEffect, useRef } from "react";
import "../styles/popup.scss";

export default function Popup(props) {
  const ref = useRef();

  const [isModalOpen, setModalOpen] = useState(false);

  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className="bodyPopup">
      {isModalOpen ? (
        <div className="modal__backdrop">
          <div className="modal__container" ref={ref}>
            <div className="buttonContainer">
              <button className="buttonPopup">Like</button>
              <button
                className="buttonPopup"
                onClick={() => {
                  props.TweetDetail();
                }}
              >
                see tweet
              </button>
            </div>
          </div>
        </div>
      ) : (
        <a onClick={() => setModalOpen(true)}>...</a>
      )}
    </div>
  );

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
}

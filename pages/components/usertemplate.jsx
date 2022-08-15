import React, { useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

export default function UserTemplate(props) {
  const [isShow, setShow] = useState(false);

  return (
    <div
      className="border-bottom"
      onClick={() => {
        if (isShow == false) {
          setShow(true);
        } else {
          setShow(false);
        }
      }}
    >
      <div className="d-flex align-items-center p-3">
        <img src={props.img} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {!isShow && <IconChevronDown />}
        {isShow && <IconChevronUp />}
      </div>

      {isShow && (
        <div className="text-center">
          <p>
            <IconMailForward /> {props.email}
          </p>
          <p>
            <IconMapPins /> {props.address}
          </p>
        </div>
      )}
    </div>
  );
}

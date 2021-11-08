import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../../../../../store/tasks/actions";
import { IconClose } from "./../../../../../shared/components/IconClose/index";

export const Row = ({ item }) => {
  const { description, hourMin, hourMax, unit, unitPrice, comments, cost } =
    item;
  const { id } = item;
  const dispatch = useDispatch();
  const delRow = () => {
    dispatch(removeTask(id));
  };
  return (
    <tr key={item.id}>
      <td className="cell-description">{description}</td>
      <td className="cell-center">{hourMin}</td>
      <td className="cell-center">{hourMax}</td>
      <td className="cell-center">
        <p>{unit}</p>
      </td>
      <td className="cell-center">{unitPrice}</td>
      <td className="cell-center">${cost}</td>
      <td className="cell-description">
        <p>{comments}</p>
      </td>
      <td className="cell-center">
        <IconClose onClick={delRow} />
      </td>
    </tr>
  );
};

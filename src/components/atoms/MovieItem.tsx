import { CSSProperties, FC } from "react";

const movieItemStyle = (selected?: boolean): CSSProperties => {
  return {
    backgroundColor: selected ? "#a9b3c4" : "#ececec",
    fontWeight: selected ? "bold" : "normal",
    cursor: "pointer",
    paddingLeft: "0.75em",
    paddingRight: "0.75em",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    color: "##1a1a1a"
  };
};

export type MovieItemProps = {
  id: string;
  title: string;
  selected?: any;
};

const MovieItem: FC<MovieItemProps> = ({ id, title, selected }) => {
  return (
    <div style={movieItemStyle(selected)} onClick={() => console.log(id)}>
      {title}
    </div>
  );
};

export default MovieItem;

type MainTitleProps = {
  text: string;
};

function MainTitle({ text }: MainTitleProps) {
  return (
    <div className="main-title">
      <h1 className="main-title__text font-hindi">{text}</h1>
    </div>
  );
}

export default MainTitle;
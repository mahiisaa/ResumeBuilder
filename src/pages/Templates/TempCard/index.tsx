interface ITempCardProps{
    title:string,
    preview:any,

}
export const TempCard:React.FC<ITempCardProps>=({title,preview}):JSX.Element=>{
    return (
      <div>
        <h1 className="text-center mb-2">{title}</h1>
        <div className="border border-mygray rounded-lg p-2 h-[310px]">
          <img src="./"></img>
        </div>
      </div>
    );
}
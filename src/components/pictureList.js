import { useDrag } from "react-dnd";

const PictureList = ({ id, title, area }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const test = area

    console.log(test)
      

    return <div>
        <div
            className='item'
            ref={drag}>
            {title}
        </div>
        
    </div>
}

export default PictureList;
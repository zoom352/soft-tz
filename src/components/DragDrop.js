import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import PostService from '../api/postService';
import Button from './button';
import PictureList from './pictureList';


const DragDrop = () => {

    const [boards, setBoards] = useState([])
    const [area, setArea] = useState([])

    useEffect(async () => {
        const response = await PostService.getAll()
        const data = response.data
        setBoards(data)
      }, [])

    
      const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }));

    const addImageToBoard = async (id) => {
        const response = await PostService.getAll()
        const data = response.data
        setBoards(data)
        const pictureList = data.filter((board) => id === board.id);
    
        setArea((area) => [...area, pictureList[0]])
        console.log(area)
    }


    return (
        <div>
            <div
                className='board'>
                <div className='board__title'>
                    {boards.map(board => {
                        return <PictureList title={board.title} id={board.id}/>
                        })}
                </div>
            </div>
            <div
                className='board1' ref={drop}>
                <div className='board__title'>
                {area.map(board => {
                    
                    return <PictureList area={board.title} title={board.title} id={board.id}/>
                    })}
                </div>
            </div>
            <Button area={area}/>
        </div>
    )
}

export default DragDrop;
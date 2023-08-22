import {useState} from 'react'
import CategoryButton from './CategoryButton'

const ProjectCategories = ({categories, onFilterProjects}) => {
    const [activeCategory,setActiveCategory]=useState('all');

    const changeCategoryHandler = (activeCat) => {
        setActiveCategory(activeCat);
        onFilterProjects(activeCat);
    }

  return (
    <div className='portfolio__categories'>
        {
            categories.map(category=>(
                <CategoryButton key={category} onChangeCategory={()=> changeCategoryHandler(category)} category={category} classname={`btn cat__btn ${activeCategory === category ? 'primary' : 'white'} `}/>
            ))
        }
    </div>
  )
}

export default ProjectCategories
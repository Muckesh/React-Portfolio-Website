import {useState} from 'react'
import ExpCategoryButton from './ExpCategoryButton'

const ExperienceCategories = ({categories, onFilterExperiences}) => {
    const [activeCategory,setActiveCategory]=useState('Education');

    const changeCategoryHandler = (activeCat) => {
        setActiveCategory(activeCat);
        onFilterExperiences(activeCat);
    }

  return (
    <div className='experience__categories'>
        {
            categories.map(category=>(
                <ExpCategoryButton key={category} onChangeExpCategory={()=> changeCategoryHandler(category)} category={category} classname={`btn cat__btn ${activeCategory === category ? 'primary' : 'white'} `}/>
            ))
        }
    </div>
  )
}

export default ExperienceCategories
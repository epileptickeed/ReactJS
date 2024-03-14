import React from 'react'

const Team = () => {

    const teamMember = [
        {
            img: require('../assets/images/team/uma_clark.png'),
            name: 'uma clark',
            job_title: 'Manager'
        },
        {
            img: require('../assets/images/team/tom_splinder.png'),
            name: 'tom splinder',
            job_title: 'Manager'
        },
        {
            img: require('../assets/images/team/jonas_hanks.png'),
            name: 'jonas hanks',
            job_title: 'Pastry Chef'
        },
        {
            img: require('../assets/images/team/laura_simons.png'),
            name: 'laura simons',
            job_title: 'Media manager'
        },
        {
            img: require('../assets/images/team/ed_morris.png'),
            name: 'ed morris',
            job_title: 'Chef'
        },
        {
            img: require('../assets/images/team/rita_flams.png'),
            name: 'rita flams',
            job_title: 'Sales person'
        },
      ]

  return (
    <div className='team'>
        {teamMember.map( (item, index) => {
          return  (<div key={index} className='member_card'> 
                    <img src={item.img} alt={item.title} />
                    <h1> {item.name} </h1>
                    <p> {item.job_title} </p>
                  </div>)
        })}
    </div>
  )
}

export default Team
import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FiChevronDown } from 'react-icons/fi';
import './style.css'

function AccordionCategory({categoryName, handleCategoryChange }) {

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<FiChevronDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography><b>Brend</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          {
            categoryName && categoryName.map((category, i) => (
              <Typography component={'span'} key={i}>
                <div className='acc-category-name'>
                  <label className='acc-category-name-label'>
                    <input value={category} className='acc-category-name-checkbox' type="checkbox" onChange={handleCategoryChange}/>
                    {category}
                  </label>
                </div>
              </Typography>
            ))
          }
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionCategory;
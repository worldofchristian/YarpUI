import React from 'react';
import { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

const ToggleTabs = () => {
  // state for the selected category
  const [activeCategory, setActiveCategory] = useState('');

  // toggler for the categories
  const toggleCategory = (category) => {
    setActiveCategory(prevCategory => (prevCategory === category ? '' : category));
  };

  // load to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // data for the categories
  const categories = [
    {
        category: 'tab 1',
        items: [
            { name: 'sub tab 1' },
            { name: 'sub tab 2' },
            { name: 'sub tab 3' },
        ],
    },
    {
        category: 'tab 2',
        items: [
            { name: 'sub tab 1' },
            { name: 'sub tab 2' },
            { name: 'sub tab 3' },
        ],
    },
  ];

  return (
    <>
    <div
    className='flex items-center justify-center'>
        <div
        className='max-w-3xl'>
            <div 
            className="container px-4 py-6">
                <>
                {categories.map((category, index) => (
                    <div 
                    key={index} 
                    className="mb-6">
                        <button
                        className="flex items-center justify-between gap-8 w-full bg-base-content p-4 rounded-lg shadow-sm"
                        onClick={() => toggleCategory(category.category)}>

                        <span 
                        className="text-lg text-slate-800 font-medium"
                        >{category.category}</span>

                        {
                            activeCategory === category.category ? (
                            <FaAngleDown className="w-6 h-6 text-slate-800 transition-transform duration-300" />
                            ) : (
                            <FaAngleRight className="w-6 h-6 text-slate-800 transition-transform duration-300" />
                            )
                        }
                        </button>

                        {activeCategory === category.category && (
                        <div 
                        className="mt-2">
                            {category.items.map((item, index) => (
                            <div 
                            key={index} 
                            className="flex my-4 items-center justify-between">
                                <div
                                className='flex'>
                                <FaAngleRight
                                className='ml-4 mt-4 base-content'
                                />

                                <h3 
                                className="text-lg text-base-content font-large my-2 underline cursor-pointer"
                                >{item.name}</h3>
                                </div>
                            </div>
                            ))}
                        </div>
                        )}
                    </div>
                ))}
                </>
            </div>
        </div>
    </div>
    </>
  )
}

export default ToggleTabs;

import { useState, useEffect } from 'react';

function DefaultProduct() {
     const [showReturnAndLayout, setShowReturnAndLayout] = useState<boolean>(false);
  const [showRest, setShowRest] = useState<boolean>(false);

  useEffect(() => {
    const returnAndLayoutTimeout = setTimeout(() => {
      setShowReturnAndLayout(true);
    }, 5000);

    const restTimeout = setTimeout(() => {
      setShowRest(true);
    }, 8000);
    return () => {
        clearTimeout(returnAndLayoutTimeout);
        clearTimeout(restTimeout);
      };
    }, []);
  return (
    <div className='flex mt-3 flex-col'>
      <span className='mb-1 text-md font-bold'>export default function 
      <span className='font-thin'> ( &#123; data &#125; )</span> 
      <span className='font-thin'> &#123;</span>
      </span>
       <div className='flex text-md font-bold'>
       {showReturnAndLayout &&
        <>
       <span>&nbsp;&nbsp;return </span>
       <span className='font-bold text-[#0A72EF]'>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Layout&gt;
        </span>
        </>
        }  
         </div>  
         {showRest && 
         <span >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
             <span className='mr-2 text-[#0A72EF] font-bold' >Product</span>  
             details=&#123; data &#125; /&gt;
             </span>
             } 
         {showReturnAndLayout && 
         <>
         <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                  <span className='font-bold text-[#0A72EF]'> /Layout</span>&gt;
              </span>
              </>
         } 
           <span>&#125;</span>
        </div>
  )
}

export default DefaultProduct
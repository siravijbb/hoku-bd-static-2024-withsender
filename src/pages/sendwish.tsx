import { Button, CircularProgress, Divider, Fade, Grow, IconButton,Radio,RadioGroup ,FormControlLabel ,FormControl ,FormHelperText ,FormLabel,TextField  } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Alegreya_Sans_SC, Old_Standard_TT } from 'next/font/google'
import useSWR from 'swr';
import { DateTime } from 'luxon';
import InfiniteScroll from 'react-infinite-scroll-component';
import RefreshIcon from '@mui/icons-material/Refresh';
import Link from 'next/link';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Logo } from '@/svg/Logo';


import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { LeftNav } from '@/svg/LeftNav';
import { BadgeBody } from '@/svg/badge/body';
import { CowSwissBottom } from '@/svg/badge/bottom/cowswiss';
import { CowSwissTop } from '@/svg/badge/top/cowswiss';
import { TapirTop } from '@/svg/badge/top/tapir';
import { TapirBottom } from '@/svg/badge/bottom/tapir';
import { BananaTop } from '@/svg/badge/top/banana';
import { BananaBottom } from '@/svg/badge/bottom/banana';
import { HamhamTop } from '@/svg/badge/top/hamham';
import { HamhamBottom } from '@/svg/badge/bottom/hamham';
import { HeartTop } from '@/svg/badge/top/heart';
import { HeartBottom } from '@/svg/badge/bottom/heart';

//

const oldStandard = Old_Standard_TT({ weight : '400', subsets : ['latin'] })
const alegreya = Alegreya_Sans_SC({ weight : '400', subsets : ['latin'] })

export default function Page() {
  	let form = {
		Name: '', // Initialize with an empty string or a default value
		Wish: '' ,// Initialize with an empty string or a default value
		Picture: '' // Initialize with an empty string or a default value
	};
  
  
    const [lastSwap, setLastSwap] = useState<DateTime>(DateTime.now())
  const [now, setNow] = useState<DateTime>(DateTime.now())
  const [openEye, setOpenEye] = useState(true)
  const pageSize = 10
  const swapTime = 5
  const [page, setPage] = useState(1)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const banners = [
    {
      id: "dee279c3-351e-46a2-b20b-77315dcfade0",
      name: "baku-voice-pack",
      url: "https://shop.realic.net/products/2023-bakus-birthday-voice-pack",
      imgURL: "/img/banner/20230809140056-8f8f5e75-3f69-4daf-9894-16205c7efd5c.png",
      order: 1
    },
    {
      id: "aa5dfb0e-64e3-4c28-8d85-a66672d5dcc1",
      name: "baku-live",
      url: "https://www.youtube.com/watch?v=HLhFqdDP2Dc",
      imgURL: "/img/banner/20230808184450-17682c2b-8c3e-4111-a047-0beb7fc945d4.jpeg",
      order: 2
    },
    {
      id: "dee279c3-351e-46a2-b20b-77315dcfade1",
      name: "#กินไก่กินฝัน",
      url: "https://twitter.com/search?q=%23%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%9D%E0%B8%B1%E0%B8%99",
      imgURL: "/img/banner/20230807150850-18a3b265-5351-40e0-a0df-992d3bd6d0b8.png",
      order: 3
    },
    {
      id: "b9e5882d-67b5-4a05-bbaa-3a71557b4077",
      name: "follow-baku",
      url: "https://www.youtube.com/@Baku_ARP",
      imgURL: "/img/banner/20230726021134-165d3268-14f1-4791-9d2e-f172ecc0de45.jpeg",
      order: 4
    },
    {
      id: "e1a8437e-5eff-4f76-b0d4-4f40d274f199",
      name: "HBD",
      url: null,
      imgURL: "/img/banner/20230728134429-593e3436-1fb4-44df-bb59-6050a28af6d5.png",
      order: 5
    },
    {
      id: "aa90961a-cfb0-422c-b7ea-50474a71235e",
      name: "cafe-project",
      url: "https://twitter.com/Dreamerism89/status/1678434817464213504",
      imgURL: "/img/banner/20230726021035-26ce881e-3bf5-4f37-91d1-b87fb94cd8ba.jpeg",
      order: 6
    },
    {
      id: "5fae0719-5365-4baa-bc3e-4a8cbe5cb7e4",
      name: "menu",
      url: "https://twitter.com/Dreamerism89/status/1682369217700708353",
      imgURL: "/img/banner/20230726021102-06402db1-af7f-402e-8cc1-011f7123d012.jpeg",
      order: 7
    }
  ]

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
  });
  const [selectedRadio, setSelectedRadio] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Selected Radio:', selectedRadio);
    console.log('Name:', formData.name);
    console.log('Surname:', formData.surname);

    // Add your form submission code here.
  };

  useEffect(() => {
    // Update Every Second
    const interval = setInterval(() => {
      setNow(DateTime.now())
    }, 1000)

    window.addEventListener("resize", handleResize);
    handleResize()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if(interval){
        clearInterval(interval);
      }
    }
  },[])

  useEffect(()=>{
    setLastSwap(DateTime.now())
  }, [openEye])

  useEffect(()=>{
    if(lastSwap.diffNow(['seconds']).seconds < (swapTime*-1)){
      setOpenEye(!openEye)
    }
  }, [now])
  

  const swiperRef = useRef<SwiperClass | null>(null);

  const { data:postData, error:postError, isLoading:postIsLoading, isValidating:postIsValidating, mutate:postMutate } = useSWR('/post.json', async (url) => {
    setPage(0)
    const res = await fetch(url)
    if(!res.ok){
        return {
            data : [],
            total : 0
        }
    }
    setPage(1)
    return (await res.json()) as {
      data : {
        id : string,
        name : string,
        comment : string
        giftId : string,
        createdAt : string,
        gift : {
          id: string;
          name: string;
          desc: string | null;
          imgURL: string;
          bgColorCode: string;
          borderColor: string;
          order: number;
        }
      }[],
      total : number
    }
  },{
    revalidateOnMount : true,
    revalidateOnFocus : false
  }
  
  
  
  
  
  
  
  
  
  )

  return (
    <div className='flex flex-col w-full items-center'>
      <div className={`flex flex-col min-h-screen w-full overflow-x-hidden z-[1] pt-6 pb-16 gap-4 text-[#000000] items-center`}>
        <div className='flex flex-col w-full items-center relative'>
          <div className='hover:cursor-pointer' onClick={() => {setOpenEye(!openEye)}}>
            <div className={openEye ? '' : 'hidden'}>
              <img className='hover:cursor-pointer min-[260px]:w-[260px] w-full' src={'/img/baku_head.png'} alt={'baku-bd-chibi'}/>
            </div>
            <div className={openEye ? 'hidden' : ''}>
              <img className='hover:cursor-pointer min-[260px]:w-[260px] w-full' src={'/img/baku_head_open.png'} alt={'baku-bd-chibi'}/>
            </div>
          </div>
          <div className='relative w-full sm:h-[150px] min-[500px]:h-[130px] min-[425px]:h-[100px] h-[80px]'>
            <Fade in={true} className='text-center absolute -translate-x-[50%] left-[50%] flex flex-col w-full h-fit'>
              <h1 className=''>
                <span className={`${oldStandard.className} sm:text-[58px] min-[500px]:text-[48px] min-[425px]:text-[40px] text-[30px]`}>Happy Baku's birthday</span>
                <span className={`${oldStandard.className} sm:text-3xl min-[500px]:text-2xl min-[425px]:text-xl text-base`}>09th August</span>
              </h1>
            </Fade>
          </div>
          <img className='absolute min-w-[1046px] top-0 left-[50% -translate-x-[50%]] -z-[2]' src='/img/WebHBDBaku.png'/>
        </div>
        <div className='min-[1901px]:w-full sm:w-[1900px] w-full relative'>
          <IconButton disableRipple className=' hover:bg-transparent absolute z-[2] text-white top-[50%] lg:right-[calc(50%-450px)] sm:right-[calc(50%-280px)] min-[425px]:right-[20px] right-[0px] p-0 -translate-y-[50%] translate-x-[50%] w-[100px] h-[100px]' onClick={() => swiperRef.current?.slideNext()}>
            <div className='p-0 w-full h-full flex items-center justify-start'>
              <LeftNav className='md:w-16 md:h-16 min-[425px]:w-12 w-10 min-[425px]:h-12 h-10 z-[1] rotate-180'/>
            </div>
          </IconButton>
          <IconButton disableRipple className=' hover:bg-transparent absolute z-[2] text-white top-[50%] lg:left-[calc(50%-450px)] sm:left-[calc(50%-280px)] min-[425px]:left-[20px] left-[0px] p-0 -translate-y-[50%] -translate-x-[50%] w-[100px] h-[100px]' onClick={() => swiperRef.current?.slidePrev()}>
            <div className='p-0 w-full h-full flex items-center justify-end'>
              <LeftNav className='md:w-16 md:h-16 min-[425px]:w-12 w-10 min-[425px]:h-12 h-10 z-[1]'/>
            </div>
          </IconButton>
          <Swiper onSwiper={(swiper:SwiperClass) => { swiperRef.current = swiper }} slidesPerView={ dimensions.width >= 640 ? 3 : 1 } spaceBetween={0} centeredSlides={true}>
            {banners.map( banner => <SwiperSlide key={banner.id} className='aspect-video '>
              {({ isActive, isPrev, isNext }) => (
                <div>
                  { banner.url && <Link className={`${isActive ? '' : 'brightness-50'} ${(isPrev || isNext || isActive) ? 'opacity-100' : 'opacity-0'} transition`} href={banner.url} target='_blank'>
                    <img src={banner.imgURL} className={`transition ease-linear sm:rounded-[50px] w-full object-cover aspect-video ${(isActive)? '' : 'scale-75'}`}/>
                  </Link>}
                  { !banner.url && <div className={`${isActive ? '' : 'brightness-50'} ${(isPrev || isNext || isActive) ? 'opacity-100' : 'opacity-0'} transition`}>
                    <img src={banner.imgURL} className={`transition ease-linear sm:rounded-[50px] w-full object-cover aspect-video ${(isActive)? '' : 'scale-75'}`}/>
                  </div>}
                </div>
              )}
            </SwiperSlide> )}
          </Swiper>
        </div>
            <div>
            <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Choose an option</FormLabel>
              <RadioGroup
                aria-label="radio-options"
                name="radio-options"
                value={selectedRadio}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="Option 1"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Option 2"
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="Option 3"
                />
              </RadioGroup>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>



            </div>
        
      </div>
      <div className='w-full h-fit flex flex-row gap-2 fixed bottom-0 bg-[#4E4670] z-[1] p-2 text-white justify-center items-center'>
        <Link className="flex min-[431px]:flex-row flex-col items-center gap-1" href={"https://twitter.com/Dreamerism89"} target="_blank">
            <TwitterIcon className="text-2xl"/>
            <span className="min-[431px]:text-xl text-xs text-center">ผู้ฝันใฝ่แปลว่าอิสระ</span>
        </Link>
        <Divider className="bg-white" orientation="vertical" flexItem />
        <div className='h-full justify-center items-center flex sm:flex-row flex-col min-[341px]:flex-none flex-1 sm:gap-2'>
          <span className="sm:text-base text-xs text-center">ติดตาม<b className='underline'>คุณบากุ</b>ได้แล้ววันนี้ ที่</span>
          <div className='min-[341px]:flex grid grid-cols-3 min-[341px]:gap-2'>
            <Link className='flex items-center shrink-0' href={"https://algorhythm.realic.net/members/illusion/baku"} target="_blank">
                <img src="/img/logo_arp.png" className="w-[36px]"/>
            </Link>
            <Link className='flex items-center' href={"https://www.youtube.com/@Baku_ARP"} target="_blank">
                <YouTubeIcon className="text-3xl"/>
            </Link>
            <Link className='flex items-center' href={"https://twitter.com/Baku_ARP"} target="_blank">
                <TwitterIcon className="text-3xl"/>
            </Link>
            <Link className='flex items-center' href={"https://www.facebook.com/Baku.ARP"} target="_blank">
                <FontAwesomeIcon className="text-[24px] aspect-square" icon={faFacebook} />
            </Link>
            <Link className='flex items-center' href={"https://www.tiktok.com/@baku_arp"} target="_blank">
                <FontAwesomeIcon className="text-[24px] aspect-square" icon={faTiktok} />
            </Link>
            <Link className='flex items-center p-1' href={"https://vtuberthaiinfo.com/talent/baku_arp"} target="_blank">
                <Logo className="w-[26px] h-[26px]"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


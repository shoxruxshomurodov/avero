import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  foodBanner,
  foodCloud,
  foodServing,
  foodServingBg,
  mealImage1,
  mealImage2,
  mealImage3,
  mealImage4,
} from "../../assets/images/food-services";
import { tabMeal } from "../../assets/images/icons";
import { Heading, Tab } from "../../components";
import Card from "../../components/card";
import { MainLayout } from "../../layouts";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const Index = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const menuRef = useRef<any>(null);
  const scrollToMenu = () => menuRef.current.scrollIntoView();

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <MainLayout>
      <div className="px-[60px] bg-[#F1F3F6] pb-8 pt-[50px]">
        <nav className="bg-white px-7 py-5 rounded-2xl flex justify-between">
          <div className="flex items-center justify-between w-[55%] border-r pr-14 gap-10">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-2 leading-6">14:20</h3>
              <p className="text-sm font-normal leading-[14px]">
                31-Avgust, Barcelona
              </p>
            </div>
            <div className="flex justify-between flex-grow border-b-2 border-primary-red">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_429_1099)">
                  <path
                    d="M8.73168 9.69329L4.97335 3.79995L6.58251 3.36829L12.375 8.71829L16.76 7.54329C17.0803 7.45753 17.4215 7.50251 17.7085 7.66832C17.9956 7.83414 18.2051 8.1072 18.2908 8.42745C18.3766 8.7477 18.3316 9.0889 18.1658 9.37599C18 9.66307 17.7269 9.87253 17.4067 9.95829L4.93001 13.3L4.28335 10.885L4.48418 10.8308L6.54001 12.8683L4.35168 13.455C4.17223 13.5031 3.98186 13.4898 3.81079 13.4174C3.63972 13.3449 3.49778 13.2173 3.40751 13.055L1.22168 9.11662L2.42918 8.79329L4.48418 10.8308L8.73168 9.69245V9.69329ZM3.33335 15.8333H16.6667V17.5H3.33335V15.8333Z"
                    fill="#FF354D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_429_1099">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h3 className="text-base font-bold mb-2 leading-6">2h, 40s</h3>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_429_1102)">
                  <path
                    d="M8.54486 8.72499L8.23653 1.73999L9.84737 2.17166L12.189 9.70082L16.5732 10.8758C16.7318 10.9183 16.8804 10.9916 17.0107 11.0915C17.1409 11.1914 17.2502 11.316 17.3323 11.4581C17.4144 11.6003 17.4677 11.7572 17.4892 11.92C17.5106 12.0827 17.4998 12.2481 17.4574 12.4067C17.4149 12.5652 17.3416 12.7139 17.2417 12.8441C17.1418 12.9744 17.0172 13.0837 16.8751 13.1658C16.7329 13.2479 16.576 13.3012 16.4132 13.3226C16.2505 13.3441 16.0851 13.3333 15.9265 13.2908L3.44987 9.94749L4.09653 7.53249L4.2982 7.58666L5.05987 10.3783L2.8707 9.79249C2.69131 9.74422 2.5332 9.63739 2.42147 9.48897C2.30974 9.34056 2.25081 9.15906 2.25403 8.97332L2.32903 4.47082L3.53653 4.79416L4.2982 7.58666L8.54486 8.72499ZM3.3332 15.8333H16.6665V17.5H3.3332V15.8333Z"
                    fill="#FF354D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_429_1102">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-2 leading-6">17:00</h3>
              <p className="text-sm font-normal leading-[14px]">
                31-Avgust, Los Angeles
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-[45%] pl-14">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-2 leading-6">Jumayev M.</h3>
              <p className="text-sm font-normal leading-[14px]">
                CHR — 250 2103163081
              </p>
            </div>
            <div>
              <button className="bg-[#F1F3F7] py-4 px-7 rounded-3xl font-inter text-base flex  gap-[10px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_429_1109)">
                    <path
                      d="M11 21C11 20.6022 10.842 20.2206 10.5607 19.9393C10.2794 19.658 9.89782 19.5 9.5 19.5C9.10218 19.5 8.72064 19.658 8.43934 19.9393C8.15804 20.2206 8 20.6022 8 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H8C8 3.39782 8.15804 3.77936 8.43934 4.06066C8.72064 4.34196 9.10218 4.5 9.5 4.5C9.89782 4.5 10.2794 4.34196 10.5607 4.06066C10.842 3.77936 11 3.39782 11 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V9.5C21.337 9.5 20.7011 9.76339 20.2322 10.2322C19.7634 10.7011 19.5 11.337 19.5 12C19.5 12.663 19.7634 13.2989 20.2322 13.7678C20.7011 14.2366 21.337 14.5 22 14.5V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H11ZM9.5 10.5C9.89782 10.5 10.2794 10.342 10.5607 10.0607C10.842 9.77936 11 9.39782 11 9C11 8.60218 10.842 8.22064 10.5607 7.93934C10.2794 7.65804 9.89782 7.5 9.5 7.5C9.10218 7.5 8.72064 7.65804 8.43934 7.93934C8.15804 8.22064 8 8.60218 8 9C8 9.39782 8.15804 9.77936 8.43934 10.0607C8.72064 10.342 9.10218 10.5 9.5 10.5ZM9.5 16.5C9.89782 16.5 10.2794 16.342 10.5607 16.0607C10.842 15.7794 11 15.3978 11 15C11 14.6022 10.842 14.2206 10.5607 13.9393C10.2794 13.658 9.89782 13.5 9.5 13.5C9.10218 13.5 8.72064 13.658 8.43934 13.9393C8.15804 14.2206 8 14.6022 8 15C8 15.3978 8.15804 15.7794 8.43934 16.0607C8.72064 16.342 9.10218 16.5 9.5 16.5Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_429_1109">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Yo’lovchini o’zgartirish
              </button>
            </div>
          </div>
        </nav>
      </div>{" "}
      <Tab />
      <div
        className={clsx(
          "py-10 px-[60px] grid grid-cols-12 gap-6",
          isOpenModal && "hidden"
        )}
      >
        <Card className="col-span-4 relative">
          <div className="py-12 pl-11 pr-20 flex flex-col justify-between h-full">
            <h3 className="text-[45px] leading-[60px] font-montserrat font-bold">
              Ovqatingizga oldindan buyurtma bering
            </h3>
            <p className="text-[#90A18B] text-base">
              O&apos zingiz uchun eng yaxshi variantni tanlang!. Taomga
              ketishdan kamida 24 yoki 36 soat oldin buyurtma berishni unutmang*
            </p>
          </div>
          <div className="absolute bg-primary-red p-16 rounded-full top-1/2 -translate-y-1/2 left-1/2 translate-x-2/4 z-10">
            <Image src={tabMeal} width={75} height={75} alt="meal icon" />
          </div>
        </Card>
        <Card className="col-span-8 relative">
          <Image
            src={foodBanner}
            alt="Image"
            height={500}
            layout={"responsive"}
          />
        </Card>
      </div>
      <div className="px-[60px]">
        <Card className=" !bg-primary-blue h-[400px] w-full !rounded-2xl p-11 pt-20 food-serving-bg">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="font-bold font-montserrat text-[80px] leading-none text-white">
                32
              </h2>
              <p className="font-medium text-[32px] leading-[42px] text-white max-w-xs">
                dan ortiq taom va ichimliklar
              </p>
            </div>
            <div>
              <button
                type="button"
                className="bg-primary-red px-9 py-5 rounded-2xl text-white font-medium text-lg z-10 cursor-pointer"
                onClick={scrollToMenu}
              >
                Menyu tanlash
              </button>
            </div>
            <div className="relative">
              <div className="absolute right-0 -translate-y-2/3 z-10">
                <Image
                  src={foodServing}
                  alt="Girl seving food"
                  width={450}
                  height={450}
                />
              </div>
              <div className="absolute left-[40%] -translate-y-96 z-10">
                <Image src={foodCloud} alt="Girl seving food" />
              </div>
            </div>
          </div>
        </Card>
      </div>
      <section className="px-[60px] py-32" ref={menuRef}>
        <Heading
          title="Menyu"
          subTitle="Engage active clients at the right time and save time chasing unqualified leads"
        />
        <div className="grid grid-cols-12 gap-6">
          <Card
            className="col-span-3 !bg-transparent"
            onClick={() => setOpenModal(true)}
          >
            <Image
              src={mealImage1}
              alt={"new Image"}
              layout={"responsive"}
              className="mb-5"
            />
            <Heading
              title="Sendvich va salatlar"
              titleClass="text-[20px] !font-bold leading-snug mb-1.5"
              subTitle="7 ta taom mavjud"
              subTitleClass="text-sm text-black"
            />
          </Card>
          <Card className="col-span-3 !bg-transparent">
            <Image
              src={mealImage3}
              alt={"new Image"}
              layout={"responsive"}
              className="mb-5"
            />
            <Heading
              title="Sendvich va salatlar"
              titleClass="text-[20px] !font-bold leading-snug mb-1.5"
              subTitle="7 ta taom mavjud"
              subTitleClass="text-sm text-black"
            />
          </Card>
          <Card className="col-span-3 !bg-transparent">
            <Image
              src={mealImage3}
              alt={"new Image"}
              layout={"responsive"}
              className="mb-5"
            />
            <Heading
              title="Sendvich va salatlar"
              titleClass="text-[20px] !font-bold leading-snug mb-1.5"
              subTitle="7 ta taom mavjud"
              subTitleClass="text-sm text-black"
            />
          </Card>
          <Card className="col-span-3 !bg-transparent">
            <Image
              src={mealImage4}
              alt={"new Image"}
              layout={"responsive"}
              className="mb-5"
            />
            <Heading
              title="Sendvich va salatlar"
              titleClass="text-[20px] !font-bold leading-snug mb-1.5"
              subTitle="7 ta taom mavjud"
              subTitleClass="text-sm text-black"
            />
          </Card>
        </div>
      </section>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {" "}
        {isOpenModal && (
          <motion.div
            className="backdrop w-full h-full absolute top-[18vh] left-0 z-[100] px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-full min-h-[72vh] bg-white shadow-2xl rounded-3xl p-10"
              variants={{
                hidden: {
                  y: "-100vh",
                  opacity: 0,
                },
                visible: {
                  y: "0",
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                    type: "spring",
                    damping: 25,
                    stiffness: 500,
                  },
                },
                exit: {
                  y: "100vh",
                  opacity: 0,
                },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex  justify-between">
                <div>
                  <h2 className="text- text-[32px] font-montserrat font-semibold">
                    Sendvich va salatlar
                  </h2>
                  <p className="max-w-sm text-[#7C7C7C] font-inter text-base font-normal">
                    Engage active clients at the right time and save time
                    chasing unqualified leads
                  </p>
                </div>
                <div className="text-[#FDFDFE] font-inter font-bold text-sm leading-[16px]">
                  <div className="flex gap-[10px]">
                    <button className=" bg-primary-blue px-7 py-4 rounded-[10px]">
                      Saqlash
                    </button>
                    <button className=" bg-primary-red px-7 py-4 rounded-[10px]">
                      Hoziroq to’lash
                    </button>
                    <button
                      className="bg-[#ECEEF2] px-3 rounded-[10px]"
                      onClick={closeModal}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_429_1477)">
                          <path
                            d="M14.9999 13.2324L21.1874 7.04492L22.9549 8.81242L16.7674 14.9999L22.9549 21.1874L21.1874 22.9549L14.9999 16.7674L8.81242 22.9549L7.04492 21.1874L13.2324 14.9999L7.04492 8.81242L8.81242 7.04492L14.9999 13.2324Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_429_1477">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default Index;

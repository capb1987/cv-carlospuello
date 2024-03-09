import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { useMediaQuery } from "react-responsive";

//dayjs

import { parsedDate } from "@/utils";

import dayjs from "dayjs";

import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const MostrarDetalles = ({ children, trabajo }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { name, position, startDate, endDate, highlights, summary, url } =
    trabajo;

  const pantallaMovil = useMediaQuery({ query: "(max-width:480px" });
  const pantallaTablets = useMediaQuery({ query: "(max-width:768px" });
  const pantallaEscritorio = useMediaQuery({ query: "(max-width:1200px" });

  let sizePantalla = pantallaMovil
    ? "xs"
    : pantallaTablets
    ? "md"
    : pantallaEscritorio
    ? "xl"
    : "2xl";

  return (
    <>
      <Button
        className="bg-gray-500 text-white duration-300 transition-colors hover:bg-gray-600 p-4 uppercase font-bold w-full md:w-2/3"
        onPress={onOpen}
      >
        Ver Detalles
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement={"center"}
        size={sizePantalla}
        backdrop={"blur"}
        scrollBehavior={"inside"}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        hideCloseButton="true"
      >
        <ModalContent className="w-full mx-6 my-4">
          {(onClose) => (
            <>
              <ModalHeader className="flex rounded-t-xl flex-col text-xs sm:text-sm md:text-base uppercase text-center  gap-1 font-bold border border-b-2 shadow-sm bg-gradient-to-br from-zinc-500  to-gray-300 text-white">
                {name}
              </ModalHeader>
              <ModalBody className="bg-gray-100">
                <ul>
                  <li className="flex justify-between flex-col gap-2 md:flex-row border-b-1 border-b-gray-300 py-2">
                    <p className="font-semibold text-base md:text-lg">
                      Posición:
                    </p>
                    <p className="text-sm md:text-base">{position}</p>
                  </li>
                  <li className="flex justify-between flex-col gap-2  md:flex-row border-b-1 border-b-gray-300 py-2">
                    <p className="font-semibold text-base md:text-lg">
                      Inicio:
                    </p>
                    <p className="text-sm md:text-base">
                      {parsedDate(startDate)}
                    </p>
                  </li>
                  <li className="flex justify-between flex-col gap-2  md:flex-row border-b-1 border-b-gray-300 py-2">
                    <p className="font-semibold text-base md:text-lg">Fin:</p>
                    <p className="text-sm md:text-base">
                      {parsedDate(endDate)}
                    </p>
                  </li>
                  <li className="flex justify-between items-center flex-col gap-2 md:gap-9  md:flex-row border-b-1 border-b-gray-300 py-2">
                    <p className="font-semibold text-base md:text-lg">
                      Objetivos:
                    </p>
                    <p className="text-xs md:text-sm lg:text-base w-full lg:text-end">
                      {summary}
                    </p>
                  </li>
                  <li className="flex justify-between flex-col gap-2  md:flex-row border-b-1 border-b-gray-300 py-2">
                    <p className="font-semibold text-base md:text-lg">
                      Página:
                    </p>
                    <a
                      href={url}
                      className="font-semibold duration-300 transition-colors  hover:text-blue-500"
                      target="_blank"
                    >
                      {" "}
                      <p className="text-sm md:text-base">{url}</p>
                    </a>
                  </li>
                  <li className="flex justify-between lg:justify-end flex-col items-center gap-2  md:gap-6  md:flex-row border-b-1 last-of-type:border-b-0 py-2">
                    <p className="font-semibold text-base md:text-lg">
                      Descripción:
                    </p>

                    <ul className="list-decimal px-2 py-4 space-y-2 text-sm lg:text-lg xl:text-xl lg:text-justify">
                      {highlights.map((objetivo, index) => (
                        <li key={index}>{objetivo}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="text-white bg-gray-500 w-full uppercase text-xl font-semibold"
                  onPress={onClose}
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MostrarDetalles;

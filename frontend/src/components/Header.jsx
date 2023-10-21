import { Link } from 'react-scroll';

import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack
} from '@chakra-ui/react'


import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Button
                pos={'fixed'}
                top={4}
                left={4}
                colorScheme='purple'
                p={0}
                w={10}
                h={10}
                borderRadius={"full"}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={20} />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Dashboard</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button colorScheme={"purple"} variant={'ghost'} >
                                <Link spy={true} smooth={true} activeClass='active'  onClick={onClose}  to='sectorChart'>Sector Chart</Link>
                            </Button>

                            <Button  colorScheme={"purple"}  variant={'ghost'}>
                                <Link spy={true} smooth={true} activeClass='active' onClick={onClose} to='intersityChart'>Intensity Chart</Link>
                            </Button>

                            <Button  colorScheme={"purple"}  variant={'ghost'}>
                                <Link spy={true} smooth={true} activeClass='active'  onClick={onClose}  to='likelihoodChart'>Likelihood Chart</Link>
                            </Button>

                            <Button  colorScheme={"purple"}  variant={'ghost'}>
                                <Link spy={true} smooth={true} activeClass='active'  onClick={onClose}  to='regionChart'>Region Chart</Link>
                            </Button>
                            <Button colorScheme={"purple"}  variant={'ghost'}>
                                <Link spy={true} smooth={true} activeClass='active'  onClick={onClose}  to='topicChart'>Topic Chart</Link>
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>    
            </Drawer>
        </>
    )
}

export default Header

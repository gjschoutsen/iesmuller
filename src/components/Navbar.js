import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Text,
  Flex,
  Button,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';

export default function NavBar({ sectionOffsets, toggleForm, toggleLang }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navBarHeight = 85;

  const linksArr = [
    {
      id: 1,
      to: 'bio',
      title: 'Bio',
    },
    {
      id: 2,
      to: 'groepen',
      title: 'Groepen',
    },
    {
      id: 3,
      to: 'agenda',
      title: 'Agenda',
    },
    {
      id: 4,
      to: 'lessen',
      title: 'Lessen',
    },
    {
      id: 5,
      to: 'workshops',
      title: 'Workshops',
    },
    {
      id: 6,
      to: 'studio',
      title: 'Studio',
    },
  ];
  if (
    scrollPosition + navBarHeight >= sectionOffsets.bio &&
    scrollPosition + navBarHeight < sectionOffsets.groepen
  ) {
    linksArr[0].color = '#FFC380';
  } else if (
    scrollPosition + navBarHeight >= sectionOffsets.groepen &&
    scrollPosition + navBarHeight < sectionOffsets.agenda
  ) {
    linksArr[1].color = '#FFC380';
  } else if (
    scrollPosition + navBarHeight >= sectionOffsets.agenda &&
    scrollPosition < sectionOffsets.lessen
  ) {
    linksArr[2].color = '#FFC380';
  } else if (
    scrollPosition + navBarHeight >= sectionOffsets.lessen &&
    scrollPosition + navBarHeight < sectionOffsets.workshops
  ) {
    linksArr[3].color = '#FFC380';
  } else if (
    scrollPosition + navBarHeight >= sectionOffsets.workshops &&
    scrollPosition + navBarHeight < sectionOffsets.studio
  ) {
    linksArr[4].color = '#FFC380';
  } else if (
    scrollPosition + navBarHeight >= sectionOffsets.studio &&
    scrollPosition + navBarHeight <= sectionOffsets.agendaEnd
  ) {
    linksArr[5].color = '#FFC380';
  } else {
    linksArr[0].color = 'white';
  }

  function mobileMenu(linksArr) {
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="outline"
          _hover={{ bg: 'none' }}
          _expanded={{
            bg: 'black',
            border: 'none',
            hover: 'none',
          }}
          display={['block', 'block', 'none', 'none']}
        >
          Menu
        </MenuButton>
        <MenuList display={{ lg: 'none' }} bg="black">
          {linksArr.map(link => {
            return (
              <Link
                key={link.id}
                to={link.to}
                smooth={true}
                duration={1000}
                offset={-60}
                isDynamic
              >
                <MenuItem cursor="pointer" bg="none" _focus={{ bg: 'none' }}>
                  {link.title}
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Menu>
    );
  }

  return (
    <>
      <Flex
        w="100%"
        padding="20px"
        fontFamily="Mukta, sans-serif"
        fontSize="2xl"
        bgGradient="linear(to-b, black, rgba(255,0,0,0) )"
        backdropFilter="auto"
        backdropBlur="6px"
        pos="fixed"
        justify="space-around"
        align="center"
        zIndex="1"
      >
        <Link
          to="header"
          smooth={true}
          duration={1000}
          display={['none', 'none', 'none', 'block']}
        >
          <Text
            display={['none', 'none', 'none', 'block']}
            color="#FFC380"
            fontSize="3xl"
            cursor="pointer"
          >
            Ies Muller
          </Text>
        </Link>
        {/* MOBILE MENU */}
        {mobileMenu(linksArr)}
        {/* BROWSER MENU */}
        <Flex justify="space-evenly" align="center" gap="20px" color="white">
          {linksArr.map(link => {
            return (
              <Link
                key={link.id}
                to={link.to}
                smooth={true}
                duration={1000}
                offset={-50}
                isDynamic
              >
                <Text
                  display={['none', 'none', 'block', 'block']}
                  _hover={{ color: '#FFC380' }}
                  cursor="pointer"
                  color={link.color}
                >
                  {link.title}
                </Text>
              </Link>
            );
          })}
          <Button
            variant="outline"
            border="none"
            _hover={{ color: '#FFC380' }}
            onClick={toggleLang('en')}
          >
            🇬🇧
          </Button>
          {/* <Select
            _focus={{ outline: 'none', boxShadow: 'none' }}
            width={'100px'}
            placeholder="🇳🇱"
            border="none"
          >
            <option value="option1" border="none">
              🇬🇧
            </option>
          </Select> */}

          <Button
            colorScheme="blue"
            onClick={() => {
              toggleForm(true);
            }}
          >
            Contact
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

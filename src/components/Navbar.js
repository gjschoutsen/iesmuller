import { useState, useEffect } from 'react'
import Form from './Form'
import '../css/NavBar.css'
import { Link } from 'react-scroll'
import {
  Text,
  Flex,
  Button,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

export default function NavBar() {
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

  const linksArr = [
    {
      id: 1,
      to: 'bio',
      title: 'Bio',
    },
    {
      id: 2,
      to: 'lessen',
      title: 'Lessen'
    },
    {
      id: 3,
      to: 'workshops',
      title: 'Workshops'
    },
    {
      id: 4,
      to: 'studio',
      title: 'Studio'
    },
    {
      id: 5,
      to: 'groepen',
      title: 'Groepen'
    },
    {
      id: 6,
      to: 'agenda',
      title: 'Agenda'
    },
  ]
  if (scrollPosition >= 1154 && scrollPosition < 2248) {
    linksArr[0].color = '#FFC380'
  }
  else if (scrollPosition >= 2248 && scrollPosition < 3082) {
    linksArr[1].color = '#FFC380'
  }
  else if (scrollPosition >= 3082 && scrollPosition < 3766) {
    linksArr[2].color = '#FFC380'
  }
  else if (scrollPosition >= 3766 && scrollPosition < 4708) {
    linksArr[3].color = '#FFC380'
  }
  else if (scrollPosition >= 4708 && scrollPosition < 5297) {
    linksArr[4].color = '#FFC380'
  }
  else if (scrollPosition >= 5298 && scrollPosition <= 5795) {
    linksArr[5].color = '#FFC380'
  } else {
    linksArr[0].color = "white"
  }

  const [form, setForm] = useState(false)

  const toggleForm = (toggle) => {
    setForm(toggle)
  }

  useEffect(() => {
    if (form) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [form])

  return (
    <>
      <Flex
        w='100%'
        padding='20px 20px'
        fontFamily='Mukta, sans-serif'
        fontSize='2xl'
        bgGradient='linear(to-b, black, rgba(255,0,0,0) )'
        backdropFilter='auto'
        backdropBlur='6px'
        pos='fixed'
        justify='space-between'
        align='center'
      >
        <Link
          to='header'
          smooth={true}
          duration={1000}
        >
          <Text
            display={['none', 'none', 'none', 'block']}
            color='#FFC380'
            fontSize='3xl'
            cursor='pointer'
          >
            Ies Muller
          </Text>
        </Link>
        <Menu>
          <MenuButton
            as={Button}
            variant='outline'
            display={['block', 'block', 'none', 'none']}
          >
            Menu
          </MenuButton>
          {/* MOBILE MENU */}
          {newFunction(linksArr)}
        </Menu>
        {/* BROWSER MENU */}
        <Flex
          justify='space-evenly'
          align='center'
          gap='20px'
          color='white'
        >
          {linksArr.map((link) => {
            return (
              <Link key={link.id}
                to={link.to}
                smooth={true}
                duration={1000}
                offset={-50}
                isDynamic
              >
                <Text
                  display={['none', 'none', 'block', 'block']}
                  _hover={{ color: "#FFC380" }}
                  cursor='pointer'
                  color={link.color}
                >
                  {link.title}
                </Text>
              </Link>
            )
          })}
          <Select
            _focus={{ outline: "none", boxShadow: "none" }}
            width={"70px"}
            placeholder='🇳🇱'
            border='none'

          >
            <option
              value='option1'
              border='none'
            >🇬🇧</option>
          </Select>

          <Button
            colorScheme='blue'
            onClick={() => { toggleForm(true) }}
          >
            Boek nu!
          </Button>
        </Flex>
      </Flex>
      {form && <Form toggleForm={toggleForm} />}
    </>
  )
}
function newFunction(linksArr) {
  return <MenuList
    display={{ lg: 'none' }}
  >
    {linksArr.map((link) => {
      return (
        <Link key={link.id}
          to={link.to}
          smooth={true}
          duration={1000}
          offset={-50}
          isDynamic
        >
          <MenuItem
            _hover={{ color: "#FFC380" }}
            cursor='pointer'
          >
            {link.title}
          </MenuItem>
        </Link>
      )
    })}
  </MenuList>
}


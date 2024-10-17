import React, { useMemo } from 'react'
import { useInteractive } from '~hooks/useInteractive'
import iconsList from '~iconsList'
import { Box, Select } from '@chakra-ui/react'

interface IProps {
  component: IComponent
}

const SelectCustomPreview = ({ component }: IProps) => {
  const {
    props: { icon, ...props },
  } = useInteractive(component)
  const Icon = useMemo(() => {
    if (!icon) {
      return null
    }
    return iconsList[icon as keyof typeof iconsList]
  }, [icon])

  return (
    <Box border={'1px solid red'} bgColor={'white'} p={5} w={'fit-content'}>
      This is a custom component ;) 
    </Box>
  )
}

export default SelectCustomPreview

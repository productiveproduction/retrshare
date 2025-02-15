import styled from 'styled-components'
import { theme } from './theme'

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid ${theme.colors.border};
  margin-top: 20px;
`

export const Header = styled.header`
  text-align: center;
  border-bottom: 2px solid ${theme.colors.border};
  padding-bottom: 20px;
  margin-bottom: 20px;
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`

export const MenuItem = styled.div<{ active: boolean }>`
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid ${theme.colors.border};
  background-color: ${props => props.active ? theme.colors.text : 'transparent'};
  color: ${props => props.active ? theme.colors.background : theme.colors.text};

  &:hover {
    background-color: ${theme.colors.text};
    color: ${theme.colors.background};
  }
`

export const Panel = styled.div<{ visible: boolean }>`
  border: 1px solid ${theme.colors.border};
  padding: 10px;
  margin-bottom: 20px;
  display: ${props => props.visible ? 'block' : 'none'};
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid ${theme.colors.border};
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: ${theme.colors.buttonBackground};
  }
`

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.buttonBackground};
  height: 20px;
  margin-top: 5px;
`

export const Progress = styled.div<{ width: number }>`
  height: 100%;
  width: ${props => props.width}%;
  background-color: ${theme.colors.text};
  text-align: center;
  line-height: 20px;
  color: ${theme.colors.background};
`

export const Footer = styled.footer`
  text-align: center;
  font-size: 12px;
  margin-top: 30px;
  border-top: 2px solid ${theme.colors.border};
  padding-top: 10px;
`

export const AsciiArt = styled.div`
  white-space: pre;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  margin: 20px 0;
`

export const BlinkingCursor = styled.span`
  animation: blink 1s step-end infinite;
`

export const ScrollableContainer = styled.div`
  height: 200px;
  overflow-y: scroll;
  margin-bottom: 20px;
  border: 1px solid ${theme.colors.border};
  padding: 10px;
`

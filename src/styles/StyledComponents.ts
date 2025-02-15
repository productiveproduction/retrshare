import styled from 'styled-components'
import { theme } from './theme'

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  border: 2px solid ${theme.colors.border};
  margin-top: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 10px;
  }
`

export const Header = styled.header`
  text-align: center;
  border-bottom: 2px solid ${theme.colors.border};
  padding-bottom: 20px;
  margin-bottom: 20px;

  h1 {
    margin: 10px 0;
    
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
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

  h2 {
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  form {
    display: grid;
    gap: 20px;

    @media (max-width: 768px) {
      gap: 15px;
    }
  }
`

export const FormGroup = styled.div`
  display: grid;
  gap: 8px;

  label {
    font-weight: bold;
  }

  input[type="range"] {
    width: 100%;
  }

  input[type="number"],
  select {
    padding: 8px;
    border: 1px solid ${theme.colors.border};
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 16px; /* Prevents iOS zoom on focus */
    }
  }
`

export const StatusBox = styled.div`
  border: 1px solid #00FF00;
  padding: 15px;
  margin-top: 30px;

  p {
    margin: 8px 0;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`

export const Button = styled.button`
  padding: 10px 20px;
  background: ${theme.colors.buttonBackground};
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.text};
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 16px;
  }
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

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    
    th, td {
      padding: 6px;
      font-size: 14px;
    }
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

  @media (max-width: 768px) {
    display: none;
  }
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
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    height: 150px;
    padding: 8px;
  }
`

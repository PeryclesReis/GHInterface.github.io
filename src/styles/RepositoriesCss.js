import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-top: 20px;
  widht: 100%;
`;

export const WrapperTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  padding: 4px;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 6px;
  border: 1px solid #353b48;
  color: #316dca;
  cursor: pointer;
  font-size: 16px;
  font-weight: 900;
  margin: 5px 5px;
  padding: 12px;
  user-select: none;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 1px 1px 1px #353b88;
  }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPainel = styled(TabPanel)`
  border-top: 1px solid #3b4043;
  display: none;
  padding: 8px;

  &.is-selected {
    display: block;
  }
`;

WrapperTabPainel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

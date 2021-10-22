import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
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
  border-radius: 16px;
  border: 1px solid #99999952;
  cursor: pointer;
  font-weight: bold;
  padding: 12px;
  margin-left: 10px;
  user-select: none;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2);
  }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPainel = styled(TabPanel)`
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
  display: none;
  padding: 8px;

  &.is-selected {
    display: block;
  }
`;

WrapperTabPainel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

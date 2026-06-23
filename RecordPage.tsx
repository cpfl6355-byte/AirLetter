import React, { useState } from 'react';
import styled from 'styled-components';
import { HealthRecord, UserProfile, ScreenId } from '../types';

interface RecordPageProps {
  records: HealthRecord[];
  profile: UserProfile | null;
  onSaveRecord: (symptoms: string[], severity: number, inhalerCount?: number) => void;
  onNavigate: (id: ScreenId) => void;
}

interface OutingRecord {
  id: number;
  date: string; // "YYYY-MM-DD"
  type: 'out' | 'in';
  status: 'good' | 'moderate' | 'unhealthy';
  description: string;
}

const PageWrapper = styled.div`
  padding: 20px 20px 100px;
  background: #FBF8F6;
  min-height: 100%;
  color: #5C3D35;
  font-family: inherit;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #EFE6E2;
  margin-bottom: 24px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoIcon = styled.div`
  color: #C45131;
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: #C45131;
  letter-spacing: -0.5px;
`;

const SettingsBtn = styled.button`
  background: none;
  border: none;
  color: #8A7570;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: #C45131;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  text-align: center;
`;

const MainTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  color: #5C3D35;
  margin: 0 0 8px 0;
  position: relative;
  padding-bottom: 8px;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15%;
    right: 15%;
    height: 2px;
    background: #C45131;
  }
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #A38F8A;
  margin: 0;
`;

const InfoCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFE6E2;
  border-left: 4px solid #C45131;
  border-radius: 12px;
  padding: 18px 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(92, 61, 53, 0.02);
`;

const InfoCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const InfoCardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 800;
  color: #5C3D35;
  
  svg {
    color: #C45131;
  }
`;

const InfoAddButton = styled.button`
  background: none;
  border: none;
  color: #C45131;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid #FCDAD0;
  background: #FFF4F0;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    background: #FCDAD0;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #FDF1ED;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C45131;
  flex-shrink: 0;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.span`
  font-size: 11px;
  color: #A38F8A;
  margin-bottom: 1px;
`;

const InfoValue = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #5C3D35;
`;

const CalendarCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFE6E2;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(92, 61, 53, 0.02);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 4px;
`;

const MonthLabel = styled.span`
  font-size: 15px;
  font-weight: 800;
  color: #5C3D35;
`;

const MonthNav = styled.div`
  display: flex;
  gap: 8px;
`;

const NavArrow = styled.button`
  background: none;
  border: none;
  color: #8A7570;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  
  &:hover {
    color: #C45131;
  }
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  color: #C4B5B0;
  margin-bottom: 8px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px 4px;
  text-align: center;
`;

const DayCell = styled.div<{ $selected: boolean; $isEmpty: boolean }>`
  position: relative;
  height: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: ${({ $isEmpty }) => ($isEmpty ? '#E5DCD9' : '#5C3D35')};
  cursor: ${({ $isEmpty }) => ($isEmpty ? 'default' : 'pointer')};
  border-radius: 8px;
  border: ${({ $selected }) => ($selected ? '2px solid #C45131' : 'none')};
  
  &:hover {
    background: ${({ $isEmpty }) => ($isEmpty ? 'none' : '#FFF4F0')};
  }
`;

const CalendarDot = styled.div<{ $color: string }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  position: absolute;
  bottom: 3px;
`;

const SelectedDateHeader = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #5C3D35;
  margin-top: 24px;
  margin-bottom: 12px;
  padding: 0 4px;
  
  span {
    margin-right: 12px;
  }
`;

const ActionCard = styled.div`
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #EFE6E2;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(92, 61, 53, 0.01);

  &:hover {
    border-color: #C45131;
    transform: translateY(-1px);
  }
`;

const PlusIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #FDF1ED;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C45131;
  margin-right: 14px;
  flex-shrink: 0;
`;

const ActionTextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ActionTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #5C3D35;
  margin-bottom: 2px;
`;

const ActionSubtitle = styled.span`
  font-size: 12px;
  color: #A38F8A;
`;

const LogCard = styled.div`
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #EFE6E2;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(92, 61, 53, 0.01);
`;

const CheckIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #EAF7F2;
  color: #2D9D78;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
  flex-shrink: 0;
`;

const LogTextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LogTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const LogTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #5C3D35;
`;

const LogDescription = styled.span`
  font-size: 13px;
  color: #8A7570;
`;

const StatusBadge = styled.span<{ $status: 'good' | 'moderate' | 'unhealthy' }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  background: ${({ $status }) => {
    if ($status === 'good') return '#EAF7F2';
    if ($status === 'moderate') return '#FFF4F0';
    return '#FDF0F0';
  }};
  color: ${({ $status }) => {
    if ($status === 'good') return '#2D9D78';
    if ($status === 'moderate') return '#C45131';
    return '#E53E3E';
  }};
  border: 1px solid ${({ $status }) => {
    if ($status === 'good') return '#D4F0E4';
    if ($status === 'moderate') return '#FCDAD0';
    return '#FCD4D4';
  }};
`;

const FormCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #C45131;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(196, 81, 49, 0.05);
  animation: slideDown 0.2s ease-out;
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FormTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: #5C3D35;
  margin: 0 0 12px 0;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #EFE6E2;
  border-radius: 8px;
  font-size: 13px;
  color: #5C3D35;
  margin-bottom: 12px;
  outline: none;
  font-family: inherit;
  box-sizing: border-box;
  
  &:focus {
    border-color: #C45131;
  }
`;

const FormLabelText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #8A7570;
  margin-bottom: 6px;
`;

const BadgeSelector = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const SelectableBadge = styled.button<{ $selected: boolean; $status: 'good' | 'moderate' | 'unhealthy' }>`
  flex: 1;
  padding: 8px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  background: ${({ $selected, $status }) => {
    if (!$selected) return '#FFFFFF';
    if ($status === 'good') return '#EAF7F2';
    if ($status === 'moderate') return '#FFF4F0';
    return '#FDF0F0';
  }};
  
  color: ${({ $selected, $status }) => {
    if (!$selected) return '#A38F8A';
    if ($status === 'good') return '#2D9D78';
    if ($status === 'moderate') return '#C45131';
    return '#E53E3E';
  }};
  
  border-color: ${({ $selected, $status }) => {
    if (!$selected) return '#EFE6E2';
    if ($status === 'good') return '#D4F0E4';
    if ($status === 'moderate') return '#FCDAD0';
    return '#FCD4D4';
  }};
`;

const FormButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const FormButton = styled.button<{ $primary?: boolean }>`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  font-family: inherit;
  background: ${({ $primary }) => ($primary ? '#C45131' : '#EFE6E2')};
  color: ${({ $primary }) => ($primary ? '#FFFFFF' : '#8A7570')};
  
  &:hover {
    opacity: 0.9;
  }
`;

const ShareBtn = styled.button`
  width: 100%;
  background: #C45131;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 24px;
  font-family: inherit;
  box-shadow: 0 4px 12px rgba(196, 81, 49, 0.15);
  
  &:hover {
    background: #B34426;
  }
`;

const SummaryCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFE6E2;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(92, 61, 53, 0.02);
`;

const SummaryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 800;
  color: #5C3D35;
  margin-bottom: 12px;
  
  svg {
    color: #C45131;
  }
`;

const SummaryMainText = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: #C45131;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SummaryTimeline = styled.div`
  display: flex;
  justify-content: space-between;
  background: #FBF8F6;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #F3ECE9;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 22px;
    right: -50%;
    width: 100%;
    height: 1.5px;
    background: #EFE6E2;
    z-index: 1;
  }
`;

const TimelineDate = styled.span`
  font-size: 11px;
  color: #A38F8A;
  font-weight: 700;
  margin-bottom: 6px;
`;

const TimelineIndicator = styled.div<{ $status: 'good' | 'moderate' | 'unhealthy' | null }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $status }) => {
    if ($status === 'good') return '#EAF7F2';
    if ($status === 'moderate') return '#FFF4F0';
    if ($status === 'unhealthy') return '#FDF0F0';
    return '#EFE6E2';
  }};
  border: 1px solid ${({ $status }) => {
    if ($status === 'good') return '#D4F0E4';
    if ($status === 'moderate') return '#FCDAD0';
    if ($status === 'unhealthy') return '#FCD4D4';
    return '#E5DCD9';
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
  z-index: 2;
  color: ${({ $status }) => {
    if ($status === 'good') return '#2D9D78';
    if ($status === 'moderate') return '#C45131';
    if ($status === 'unhealthy') return '#E53E3E';
    return '#A38F8A';
  }};
  font-size: 9px;
  font-weight: 800;
`;

const TimelineStatusText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #5C3D35;
`;

const Toast = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: 85px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(92, 61, 53, 0.95);
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 700;
  z-index: 10000;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  white-space: nowrap;
`;

/* ===== Share Modal Styled Components ===== */
const ModalOverlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(30, 15, 10, 0.55);
  z-index: 20000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'all' : 'none')};
  transition: opacity 0.3s ease;
`;

const ModalSheet = styled.div<{ $visible: boolean }>`
  width: 100%;
  max-width: 480px;
  background: #FFFFFF;
  border-radius: 24px 24px 0 0;
  padding: 0 0 40px 0;
  box-shadow: 0 -8px 40px rgba(92, 61, 53, 0.18);
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(100%)')};
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  max-height: 88vh;
  overflow-y: auto;
`;

const ModalHandle = styled.div`
  width: 40px;
  height: 4px;
  background: #EFE6E2;
  border-radius: 2px;
  margin: 12px auto 0;
`;

const ModalHeader = styled.div`
  padding: 20px 20px 16px;
  border-bottom: 1px solid #F3ECE9;
`;

const ModalHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const ModalTitle = styled.h3`
  font-size: 17px;
  font-weight: 900;
  color: #5C3D35;
  margin: 0;
`;

const ModalCloseBtn = styled.button`
  background: #F5EFEF;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8A7570;
  cursor: pointer;
  flex-shrink: 0;
  &:hover { background: #FCDAD0; color: #C45131; }
`;

const ModalSubtitle = styled.p`
  font-size: 12px;
  color: #A38F8A;
  margin: 0;
`;

const ModalBody = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const SharePreviewCard = styled.div`
  background: linear-gradient(135deg, #FFF8F6 0%, #FFF4F0 100%);
  border: 1.5px solid #FCDAD0;
  border-radius: 16px;
  padding: 16px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(196, 81, 49, 0.06);
  }
`;

const PreviewBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #C45131;
  color: #FFFFFF;
  font-size: 10px;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  letter-spacing: 0.3px;
`;

const PreviewDate = styled.div`
  font-size: 15px;
  font-weight: 900;
  color: #5C3D35;
  margin-bottom: 12px;
`;

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 12px;
`;

const PreviewStatBox = styled.div<{ $highlight?: boolean }>`
  background: ${({ $highlight }) => ($highlight ? 'rgba(196,81,49,0.07)' : '#FFFFFF')};
  border-radius: 10px;
  padding: 10px 12px;
  border: 1px solid ${({ $highlight }) => ($highlight ? '#FCDAD0' : '#F0EAE7')};
`;

const PreviewStatLabel = styled.div`
  font-size: 10px;
  color: #A38F8A;
  font-weight: 600;
  margin-bottom: 3px;
`;

const PreviewStatValue = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: #5C3D35;
`;

const PreviewActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const PreviewActivityItem = styled.div<{ $status: 'good' | 'moderate' | 'unhealthy' }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #FFFFFF;
  border-radius: 8px;
  padding: 8px 10px;
  border-left: 3px solid ${({ $status }) =>
    $status === 'good' ? '#2D9D78' : $status === 'moderate' ? '#C45131' : '#E53E3E'};
`;

const PreviewActivityTime = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #C45131;
  min-width: 36px;
`;

const PreviewActivityText = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #5C3D35;
  flex: 1;
`;

const PreviewActivityDot = styled.span<{ $status: 'good' | 'moderate' | 'unhealthy' }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $status }) =>
    $status === 'good' ? '#2D9D78' : $status === 'moderate' ? '#C45131' : '#E53E3E'};
  flex-shrink: 0;
`;

const ShareSectionLabel = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #8A7570;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const GuardianInfoBox = styled.div`
  background: #F8F4F2;
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #EFE6E2;
`;

const GuardianAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C45131, #E8835A);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 800;
  flex-shrink: 0;
`;

const GuardianDetails = styled.div`
  flex: 1;
`;

const GuardianName = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: #5C3D35;
  margin-bottom: 2px;
`;

const GuardianPhone = styled.div`
  font-size: 12px;
  color: #A38F8A;
`;

const GuardianTag = styled.span`
  font-size: 10px;
  font-weight: 700;
  background: #FCDAD0;
  color: #C45131;
  padding: 2px 8px;
  border-radius: 10px;
`;

const ConfirmShareBtn = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #C45131 0%, #E8835A 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 14px;
  padding: 16px;
  font-size: 15px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 6px 20px rgba(196, 81, 49, 0.35);
  transition: all 0.2s ease;
  letter-spacing: -0.2px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(196, 81, 49, 0.45);
  }
  &:active { transform: translateY(0); }
`;

const ShareSentOverlay = styled.div<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.92);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 24px 24px 0 0;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'all' : 'none')};
  transition: opacity 0.4s ease;
  z-index: 10;
`;

const SentIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2D9D78, #48C79A);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  box-shadow: 0 8px 24px rgba(45, 157, 120, 0.35);
  animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  @keyframes popIn {
    from { transform: scale(0); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;

const SentText = styled.div`
  font-size: 16px;
  font-weight: 900;
  color: #5C3D35;
  text-align: center;
`;

const SentSubText = styled.div`
  font-size: 12px;
  color: #A38F8A;
  text-align: center;
`;

const RecentCard = styled.div`
  position: relative;
  background: #FFFFFF;
  border: 1px solid #EFE6E2;
  border-radius: 12px;
  padding: 18px 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(92, 61, 53, 0.02);
`;

const RecentCardHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const RecentCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 800;
  color: #5C3D35;
  margin: 0;
`;

const FilterBtn = styled.button`
  background: none;
  border: none;
  color: #C45131;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-family: inherit;
  padding: 4px;
`;

const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 16px;
  margin-bottom: 16px;

  /* Vertical timeline line */
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    width: 2px;
    background: #EFE6E2;
  }
`;

const TimelineRow = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
`;

const TimelineIconCol = styled.div`
  width: 42px;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`;

const CircleIcon = styled.div<{ $active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? '#C45131' : '#F5EFEF')};
  color: ${({ $active }) => ($active ? '#FFFFFF' : '#8A7570')};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  svg {
    width: 18px;
    height: 18px;
  }
`;

const TimelineContentCol = styled.div`
  flex: 1;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const ContentTime = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #C45131;
`;

const DustBadge = styled.span<{ $status: 'good' | 'moderate' | 'unhealthy' }>`
  font-size: 11px;
  font-weight: 700;
  color: #7D6560;
  background: #FAF8F6;
  border: 1px solid #EFE6E2;
  padding: 2px 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: '●';
    font-size: 8px;
    color: ${({ $status }) => {
      if ($status === 'good') return '#2D9D78';
      if ($status === 'moderate') return '#3182CE';
      return '#E53E3E';
    }};
  }
`;

const ContentTitle = styled.h4`
  font-size: 13px;
  font-weight: 800;
  color: #5C3D35;
  margin: 0 0 2px 0;
`;

const ContentDesc = styled.p`
  font-size: 12px;
  color: #8A7570;
  margin: 0;
  line-height: 1.4;
`;

const MoreRecordsBtn = styled.button`
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #EFE6E2;
  border-radius: 12px;
  padding: 12px;
  font-size: 13px;
  font-weight: 700;
  color: #8A7570;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    background: #FAF8F6;
    border-color: #C45131;
    color: #C45131;
  }
`;

const FilterDropdown = styled.div`
  position: absolute;
  top: 28px;
  right: 0;
  background: #FFFFFF;
  border: 1px solid #EFE6E2;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(92, 61, 53, 0.14);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 120px;
`;

const FilterOption = styled.button<{ $selected: boolean }>`
  background: ${({ $selected }) => ($selected ? '#FFF4F0' : '#FFFFFF')};
  color: ${({ $selected }) => ($selected ? '#C45131' : '#5C3D35')};
  border: none;
  padding: 10px 14px;
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #FFF4F0;
    color: #C45131;
  }
`;

const WalkingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="15" cy="4" r="1.5" fill="currentColor" stroke="none" />
    <path d="M8 14l2-4 4-1.5 2 2.5" />
    <path d="M10 10l-2-3" />
    <path d="M14 8v5l-4 4-2 3" />
    <path d="M12 13l3 2 1 4" />
  </svg>
);

const CouchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6" />
    <path d="M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
    <path d="M2 13h20" />
    <path d="M6 18v2" />
    <path d="M18 18v2" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" fill="currentColor" stroke="none" />
    <circle cx="20" cy="21" r="1" fill="currentColor" stroke="none" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export const RecordPage: React.FC<RecordPageProps> = ({
  records,
  profile,
  onSaveRecord,
  onNavigate,
}) => {
  // Calendar base: May 2024
  const [currentDate, setCurrentDate] = useState(new Date(2024, 4, 20)); 
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 4, 20));
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDesc, setNewDesc] = useState('');
  const [newStatus, setNewStatus] = useState<'good' | 'moderate' | 'unhealthy'>('moderate');
  const [toastMsg, setToastMsg] = useState('');
  const [toastOpen, setToastOpen] = useState(false);
  const [filterMode, setFilterMode] = useState<'all' | 'good' | 'moderate'>('all');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareSent, setShareSent] = useState(false);

  // Initial outing logs
  const [outingRecords, setOutingRecords] = useState<OutingRecord[]>([
    {
      id: 1,
      date: '2024-05-20',
      type: 'out',
      status: 'moderate',
      description: '동네 한 바퀴 (30분 산책)'
    },
    {
      id: 2,
      date: '2024-05-18',
      type: 'out',
      status: 'moderate',
      description: '약국 다녀오기 (15분)'
    },
    {
      id: 3,
      date: '2024-05-17',
      type: 'out',
      status: 'unhealthy',
      description: '마트 장보기 (45분)'
    },
    {
      id: 4,
      date: '2024-05-19',
      type: 'out',
      status: 'good',
      description: '집 앞 정원 가벼운 산책'
    }
  ]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Calendar generation
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const calendarCells: (number | null)[] = [];

  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(null);
  }
  for (let d = 1; d <= totalDays; d++) {
    calendarCells.push(d);
  }

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setToastOpen(true);
    setTimeout(() => {
      setToastOpen(false);
    }, 2500);
  };

  const getDotColor = (d: number) => {
    // Standard mock dots for May 2024
    if (year === 2024 && month === 4) {
      if (d === 17) return '#E53E3E'; // Red
      if (d === 18) return '#C45131'; // Orange-brown
      if (d === 19) return '#8A7570'; // Gray-brown
    }

    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const dayRecords = outingRecords.filter(r => r.date === dateStr);
    if (dayRecords.length > 0) {
      const s = dayRecords[0].status;
      if (s === 'unhealthy') return '#E53E3E';
      if (s === 'moderate') return '#C45131';
      return '#8A7570';
    }
    return null;
  };

  const selectedDateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
  const selectedLogs = outingRecords.filter(r => r.date === selectedDateStr);

  const handleSaveOuting = () => {
    if (!newDesc.trim()) {
      alert('외출 내용을 입력해 주세요.');
      return;
    }

    const newRecord: OutingRecord = {
      id: Date.now(),
      date: selectedDateStr,
      type: 'out',
      status: newStatus,
      description: newDesc
    };

    setOutingRecords([...outingRecords, newRecord]);
    setNewDesc('');
    setShowAddForm(false);
    triggerToast('외출 기록이 추가되었습니다.');
  };
  const getRecent3DaysSummary = () => {
    const summary = [];
    for (let i = 2; i >= 0; i--) {
      const d = new Date(selectedDate);
      d.setDate(selectedDate.getDate() - i);
      const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const dayLogs = outingRecords.filter(r => r.date === dateStr);
      summary.push({
        dateLabel: `${d.getMonth() + 1}/${d.getDate()}`,
        hasOuting: dayLogs.length > 0,
        status: dayLogs.length > 0 ? dayLogs[0].status : null,
      });
    }
    return summary;
  };

  const recent3Days = getRecent3DaysSummary();
  const outingCount = recent3Days.filter(day => day.hasOuting).length;

  return (
    <PageWrapper>
      {/* Header */}
      <HeaderRow>
        <LogoSection>
          <LogoIcon>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </LogoIcon>
          <LogoText>맑은숨</LogoText>
        </LogoSection>
        <SettingsBtn onClick={() => onNavigate('settings')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </SettingsBtn>
      </HeaderRow>

      {/* Title */}
      <TitleWrapper>
        <MainTitle>나의 외출 기록</MainTitle>
        <Subtitle>오늘도 건강하게 잘 다녀오셨나요?</Subtitle>
      </TitleWrapper>

      {/* Card 1: 나의 건강 정보 */}
      <InfoCard>
        <InfoCardHeader>
          <InfoCardTitle>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            나의 건강 정보
          </InfoCardTitle>
          <InfoAddButton onClick={() => onNavigate('profile')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="10" height="10">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            추가
          </InfoAddButton>
        </InfoCardHeader>

        <InfoRow>
          <InfoIconWrapper>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </InfoIconWrapper>
          <InfoText>
            <InfoLabel>기본 정보</InfoLabel>
            <InfoValue>{profile?.age || 78}세, 여성</InfoValue>
          </InfoText>
        </InfoRow>

        <InfoRow>
          <InfoIconWrapper>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </InfoIconWrapper>
          <InfoText>
            <InfoLabel>현재 건강 상태</InfoLabel>
            <InfoValue>전반적으로 양호함</InfoValue>
          </InfoText>
        </InfoRow>

        <InfoRow>
          <InfoIconWrapper>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
              <path d="m8.5 8.5 7 7" />
            </svg>
          </InfoIconWrapper>
          <InfoText>
            <InfoLabel>복용 중인 약</InfoLabel>
            <InfoValue>
              {profile?.medications && profile.medications.length > 0
                ? profile.medications.map(m => m === 'inhaler' ? '흡입기' : m === 'oral' ? '경구약' : m).join(', ')
                : '고혈압 약, 영양제'}
            </InfoValue>
          </InfoText>
        </InfoRow>
      </InfoCard>

      {/* Card 2: 달력 */}
      <CalendarCard>
        <CalendarHeader>
          <MonthLabel>{year}년 {month + 1}월</MonthLabel>
          <MonthNav>
            <NavArrow onClick={handlePrevMonth}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </NavArrow>
            <NavArrow onClick={handleNextMonth}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </NavArrow>
          </MonthNav>
        </CalendarHeader>

        <WeekDays>
          <div>일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        </WeekDays>

        <CalendarGrid>
          {calendarCells.map((day, idx) => {
            const isSelected =
              day !== null &&
              selectedDate.getFullYear() === year &&
              selectedDate.getMonth() === month &&
              selectedDate.getDate() === day;
              
            const dotColor = day !== null ? getDotColor(day) : null;

            return (
              <DayCell
                key={idx}
                $selected={isSelected}
                $isEmpty={day === null}
                onClick={() => {
                  if (day !== null) {
                    setSelectedDate(new Date(year, month, day));
                  }
                }}
              >
                {day}
                {dotColor && <CalendarDot $color={dotColor} />}
              </DayCell>
            );
          })}
        </CalendarGrid>
      </CalendarCard>

      {/* 최근 활동 기록 */}
      <RecentCard>
        <RecentCardHeader>
          <RecentCardTitle>최근 활동 기록</RecentCardTitle>
          <FilterBtn onClick={() => setShowFilterDropdown(!showFilterDropdown)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            필터 {filterMode !== 'all' && `(${filterMode === 'good' ? '좋음' : '보통'})`}
          </FilterBtn>
        </RecentCardHeader>

        {showFilterDropdown && (
          <FilterDropdown>
            <FilterOption
              $selected={filterMode === 'all'}
              onClick={() => {
                setFilterMode('all');
                setShowFilterDropdown(false);
                triggerToast('전체 활동 기록을 표시합니다.');
              }}
            >
              전체 보기
            </FilterOption>
            <FilterOption
              $selected={filterMode === 'good'}
              onClick={() => {
                setFilterMode('good');
                setShowFilterDropdown(false);
                triggerToast('미세먼지 좋음 활동만 표시합니다.');
              }}
            >
              좋음 필터
            </FilterOption>
            <FilterOption
              $selected={filterMode === 'moderate'}
              onClick={() => {
                setFilterMode('moderate');
                setShowFilterDropdown(false);
                triggerToast('미세먼지 보통 활동만 표시합니다.');
              }}
            >
              보통 필터
            </FilterOption>
          </FilterDropdown>
        )}

        <TimelineContainer>
          {[
            {
              id: 'walk',
              time: '18:30',
              status: 'good' as const,
              badgeText: '미세먼지: 좋음',
              title: '동네 한 바퀴 산책',
              desc: '공원에서 30분 동안 가볍게 걸었습니다.',
              active: true,
              icon: <WalkingIcon />
            },
            {
              id: 'rest',
              time: '14:20',
              status: 'moderate' as const,
              badgeText: '미세먼지: 보통',
              title: '베란다에서 휴식',
              desc: '따뜻한 햇살을 받으며 차를 마셨습니다.',
              active: false,
              icon: <CouchIcon />
            },
            {
              id: 'shop',
              time: '10:15',
              status: 'good' as const,
              badgeText: '미세먼지: 좋음',
              title: '마트 장보기',
              desc: '필요한 식재료를 사러 다녀왔습니다.',
              active: false,
              icon: <CartIcon />
            }
          ]
            .filter(item => filterMode === 'all' || item.status === filterMode)
            .map(item => (
              <TimelineRow key={item.id}>
                <TimelineIconCol>
                  <CircleIcon $active={item.active}>
                    {item.icon}
                  </CircleIcon>
                </TimelineIconCol>
                <TimelineContentCol>
                  <ContentHeader>
                    <ContentTime>{item.time}</ContentTime>
                    <DustBadge $status={item.status}>{item.badgeText}</DustBadge>
                  </ContentHeader>
                  <ContentTitle>{item.title}</ContentTitle>
                  <ContentDesc>{item.desc}</ContentDesc>
                </TimelineContentCol>
              </TimelineRow>
            ))}
        </TimelineContainer>

        <MoreRecordsBtn onClick={() => triggerToast('더 많은 최근 활동 기록을 불러옵니다.')}>
          과거 기록 더보기
        </MoreRecordsBtn>
      </RecentCard>

      {/* Selected date header */}
      <SelectedDateHeader>
        <span>{selectedDate.getMonth() + 1}</span>
        <span>{selectedDate.getDate()}</span>
      </SelectedDateHeader>

      {/* 새로운 외출 기록하기 */}
      {showAddForm ? (
        <FormCard>
          <FormTitle>외출 기록 추가하기</FormTitle>
          <FormLabelText>외출 내용</FormLabelText>
          <FormInput
            type="text"
            placeholder="예: 마트 다녀오기 (30분)"
            value={newDesc}
            onChange={e => setNewDesc(e.target.value)}
          />
          <FormLabelText>체감 대기질</FormLabelText>
          <BadgeSelector>
            <SelectableBadge
              $selected={newStatus === 'good'}
              $status="good"
              type="button"
              onClick={() => setNewStatus('good')}
            >
              좋음
            </SelectableBadge>
            <SelectableBadge
              $selected={newStatus === 'moderate'}
              $status="moderate"
              type="button"
              onClick={() => setNewStatus('moderate')}
            >
              보통
            </SelectableBadge>
            <SelectableBadge
              $selected={newStatus === 'unhealthy'}
              $status="unhealthy"
              type="button"
              onClick={() => setNewStatus('unhealthy')}
            >
              나쁨
            </SelectableBadge>
          </BadgeSelector>
          <FormButtons>
            <FormButton type="button" onClick={() => setShowAddForm(false)}>취소</FormButton>
            <FormButton $primary type="button" onClick={handleSaveOuting}>기록 완료</FormButton>
          </FormButtons>
        </FormCard>
      ) : (
        <ActionCard onClick={() => setShowAddForm(true)}>
          <PlusIconWrapper>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </PlusIconWrapper>
          <ActionTextWrapper>
            <ActionTitle>새로운 외출 기록하기</ActionTitle>
            <ActionSubtitle>지금의 기분은 어떠신가요?</ActionSubtitle>
          </ActionTextWrapper>
        </ActionCard>
      )}

      {/* Logs for selected date */}
      {selectedLogs.length > 0 ? (
        selectedLogs.map(log => (
          <LogCard key={log.id}>
            <CheckIconWrapper>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </CheckIconWrapper>
            <LogTextWrapper>
              <LogTitleRow>
                <LogTitle>다녀왔어요</LogTitle>
                <StatusBadge $status={log.status}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10" style={{ fill: 'currentColor' }}>
                    <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-3.41-3.21-6-6.5-6C6.18 5 3.5 7.68 3.5 11c-2.3 0-4 1.7-4 4a3.5 3.5 0 0 0 3.5 3.5h14.5z" />
                  </svg>
                  {log.status === 'good' ? '좋음' : log.status === 'moderate' ? '보통' : '나쁨'}
                </StatusBadge>
              </LogTitleRow>
              <LogDescription>{log.description}</LogDescription>
            </LogTextWrapper>
          </LogCard>
        ))
      ) : (
        <div style={{ textAlign: 'center', padding: '24px', color: '#A38F8A', fontSize: '13px' }}>
          이 날의 외출 기록이 없습니다.
        </div>
      )}

      {/* 보호자에게 기록 공유하기 */}
      <ShareBtn onClick={() => { setShareSent(false); setShowShareModal(true); }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        보호자에게 기록 공유하기
      </ShareBtn>

      {/* ===== Share Modal ===== */}
      <ModalOverlay $visible={showShareModal} onClick={() => setShowShareModal(false)}>
        <ModalSheet $visible={showShareModal} onClick={e => e.stopPropagation()} style={{ position: 'relative' }}>
          <ModalHandle />
          <ModalHeader>
            <ModalHeaderTop>
              <ModalTitle>📤 보호자에게 공유하기</ModalTitle>
              <ModalCloseBtn onClick={() => setShowShareModal(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </ModalCloseBtn>
            </ModalHeaderTop>
            <ModalSubtitle>아래 공유 내용을 보호자 휴대폰으로 전송합니다.</ModalSubtitle>
          </ModalHeader>

          <ModalBody>
            {/* 공유 미리보기 카드 */}
            <div>
              <ShareSectionLabel>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><path d="M1 6s0-2 2-2h18s2 0 2 2v12s0 2-2 2H3s-2 0-2-2V6z" /><path d="M1 6l11 7 11-7" /></svg>
                공유될 내용 미리보기
              </ShareSectionLabel>
              <SharePreviewCard>
                <PreviewBadge>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="10" height="10"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.21 3.58 2 2 0 0 1 3.22 1.4h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.16 6.16l.58-.58a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.4 16.92z" /></svg>
                  맑은숨 건강 기록
                </PreviewBadge>
                <PreviewDate>
                  📅 {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일 외출 기록
                </PreviewDate>

                <PreviewGrid>
                  <PreviewStatBox $highlight>
                    <PreviewStatLabel>👤 사용자</PreviewStatLabel>
                    <PreviewStatValue>{profile?.age || 78}세 여성</PreviewStatValue>
                  </PreviewStatBox>
                  <PreviewStatBox>
                    <PreviewStatLabel>💊 복용 약</PreviewStatLabel>
                    <PreviewStatValue style={{ fontSize: '12px' }}>
                      {profile?.medications && profile.medications.length > 0
                        ? profile.medications.map(m => m === 'inhaler' ? '흡입기' : m === 'oral' ? '경구약' : m).join(', ')
                        : '고혈압 약'}
                    </PreviewStatValue>
                  </PreviewStatBox>
                  <PreviewStatBox>
                    <PreviewStatLabel>🚶 외출 횟수</PreviewStatLabel>
                    <PreviewStatValue>{selectedLogs.length > 0 ? selectedLogs.length + '회' : '없음'}</PreviewStatValue>
                  </PreviewStatBox>
                  <PreviewStatBox $highlight>
                    <PreviewStatLabel>❤️ 건강 상태</PreviewStatLabel>
                    <PreviewStatValue style={{ color: '#2D9D78' }}>양호함</PreviewStatValue>
                  </PreviewStatBox>
                </PreviewGrid>

                {/* 활동 타임라인 */}
                <PreviewActivityList>
                  {selectedLogs.length > 0 ? (
                    selectedLogs.map(log => (
                      <PreviewActivityItem key={log.id} $status={log.status}>
                        <PreviewActivityDot $status={log.status} />
                        <PreviewActivityText>{log.description}</PreviewActivityText>
                        <span style={{ fontSize: '10px', fontWeight: 700, color: log.status === 'good' ? '#2D9D78' : log.status === 'moderate' ? '#C45131' : '#E53E3E' }}>
                          {log.status === 'good' ? '좋음' : log.status === 'moderate' ? '보통' : '나쁨'}
                        </span>
                      </PreviewActivityItem>
                    ))
                  ) : [
                    { id: 'w', time: '18:30', title: '동네 한 바퀴 산책', status: 'good' as const },
                    { id: 'r', time: '14:20', title: '베란다에서 휴식', status: 'moderate' as const },
                    { id: 's', time: '10:15', title: '마트 장보기', status: 'good' as const },
                  ].map(item => (
                    <PreviewActivityItem key={item.id} $status={item.status}>
                      <PreviewActivityTime>{item.time}</PreviewActivityTime>
                      <PreviewActivityDot $status={item.status} />
                      <PreviewActivityText>{item.title}</PreviewActivityText>
                      <span style={{ fontSize: '10px', fontWeight: 700, color: item.status === 'good' ? '#2D9D78' : '#C45131' }}>
                        {item.status === 'good' ? '좋음' : '보통'}
                      </span>
                    </PreviewActivityItem>
                  ))}
                </PreviewActivityList>
              </SharePreviewCard>
            </div>

            {/* 보호자 정보 */}
            <div>
              <ShareSectionLabel>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                전송 대상 보호자
              </ShareSectionLabel>
              <GuardianInfoBox>
                <GuardianAvatar>딸</GuardianAvatar>
                <GuardianDetails>
                  <GuardianName>김미영 (딸)</GuardianName>
                  <GuardianPhone>010-1234-5678</GuardianPhone>
                </GuardianDetails>
                <GuardianTag>보호자</GuardianTag>
              </GuardianInfoBox>
            </div>

            {/* 전송 버튼 */}
            <ConfirmShareBtn
              onClick={() => {
                setShareSent(true);
                setTimeout(() => {
                  setShowShareModal(false);
                  setShareSent(false);
                  triggerToast('✅ 보호자에게 기록이 전송되었습니다.');
                }, 2000);
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              보호자 휴대폰으로 전송하기
            </ConfirmShareBtn>
          </ModalBody>

          {/* 전송 완료 오버레이 */}
          <ShareSentOverlay $visible={shareSent}>
            <SentIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><polyline points="20 6 9 17 4 12" /></svg>
            </SentIcon>
            <SentText>전송 완료!</SentText>
            <SentSubText>보호자 휴대폰으로 기록이 전달되었어요 📱</SentSubText>
          </ShareSentOverlay>
        </ModalSheet>
      </ModalOverlay>


      {/* Toast Alert */}
      <Toast $visible={toastOpen}>{toastMsg}</Toast>
    </PageWrapper>
  );
};

export default RecordPage;

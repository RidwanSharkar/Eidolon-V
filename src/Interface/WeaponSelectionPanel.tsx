import React, { useState } from 'react';
import styles from './WeaponSelectionPanel.module.css';
import { WeaponType, WEAPON_ABILITY_TOOLTIPS } from '@/Weapons/weapons';
import Image from 'next/image';
import Tooltip from '@/Interface/Tooltip';

interface WeaponSelectionPanelProps {
  onWeaponSelect: (weapon: WeaponType) => void;
  selectedWeapon: WeaponType | null;
  onStart: () => void;
}

export default function WeaponSelectionPanel({ 
  onWeaponSelect, 
  selectedWeapon,
  onStart 
}: WeaponSelectionPanelProps) {
  const [tooltipContent, setTooltipContent] = useState<{
    title: string;
    description: string;
  } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleAbilityHover = (e: React.MouseEvent, weapon: WeaponType, abilityType: 'q' | 'e') => {
    const tooltip = WEAPON_ABILITY_TOOLTIPS[weapon][abilityType];
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipContent({
      title: tooltip.title,
      description: tooltip.description
    });
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
  };

  const handleAbilityLeave = () => {
    setTooltipContent(null);
  };

  return (
    <div 
      className={styles.panel} 
      onContextMenu={(e) => e.preventDefault()}
    >
      <h2>Eidolon IV</h2>
      
      <div className={styles.iconSelection}>
        <div className={styles.weaponContainer}>
          <div 
            className={`${styles.icon} ${selectedWeapon === WeaponType.SWORD ? styles.selected : ''}`}
            onClick={() => onWeaponSelect(WeaponType.SWORD)}
          >
            <div className={styles.iconContent}>
              <Image 
                src="/icons/2.svg"
                alt="Sword"
                width={240}
                height={280}
                unoptimized
              />
            </div>
          </div>
          <div className={styles.abilityIcons}>
            <div 
              className={styles.abilityIcon}
              onMouseEnter={(e) => handleAbilityHover(e, WeaponType.SWORD, 'q')}
              onMouseLeave={handleAbilityLeave}
            >
              <Image 
                src="/icons/q2.svg"
                alt="Q Ability"
                width={80}
                height={100}
                unoptimized
              />
              <span className={styles.abilityKey}>Q</span>
            </div>
            <div 
              className={styles.abilityIcon}
              onMouseEnter={(e) => handleAbilityHover(e, WeaponType.SWORD, 'e')}
              onMouseLeave={handleAbilityLeave}
            >
              <Image 
                src="/icons/e2.svg"
                alt="E Ability"
                width={80}
                height={100}
                unoptimized
              />
              <span className={styles.abilityKey}>E</span>
            </div>
          </div>
        </div>

        <div className={styles.weaponContainer}>
          <div 
            className={`${styles.icon} ${selectedWeapon === WeaponType.SCYTHE ? styles.selected : ''}`}
            onClick={() => onWeaponSelect(WeaponType.SCYTHE)}
          >
            <div className={styles.iconContent}>
              <Image 
                src="/icons/1.svg"
                alt="Scythe"
                width={240}
                height={280}
                unoptimized
              />
            </div>
          </div>
          <div className={styles.abilityIcons}>
            <div 
              className={styles.abilityIcon}
              onMouseEnter={(e) => handleAbilityHover(e, WeaponType.SCYTHE, 'q')}
              onMouseLeave={handleAbilityLeave}
            >
              <Image 
                src="/icons/q1.svg"
                alt="Q Ability"
                width={80}
                height={100}
                unoptimized
              />
              <span className={styles.abilityKey}>Q</span>
            </div>
            <div 
              className={styles.abilityIcon}
              onMouseEnter={(e) => handleAbilityHover(e, WeaponType.SCYTHE, 'e')}
              onMouseLeave={handleAbilityLeave}
            >
              <Image 
                src="/icons/e1.svg"
                alt="E Ability"
                width={80}
                height={100}
                unoptimized
              />
              <span className={styles.abilityKey}>E</span>
            </div>
          </div>
        </div>

        <div className={styles.weaponContainer}>
          <div 
            className={`${styles.icon} ${selectedWeapon === WeaponType.SABRES ? styles.selected : ''}`}
            onClick={() => onWeaponSelect(WeaponType.SABRES)}
          >
            <div className={styles.iconContent}>
              <Image 
                src="/icons/3.svg"
                alt="Sabres"
                width={240}
                height={280}
                unoptimized
              />
            </div>
          </div>
          <div className={styles.abilityIcons}>
            <div 
              className={styles.abilityIcon}
              onMouseEnter={(e) => handleAbilityHover(e, WeaponType.SABRES, 'q')}
              onMouseLeave={handleAbilityLeave}
            >
              <Image 
                src="/icons/q3.svg"
                alt="Q Ability"
                width={80}
                height={100}
                unoptimized
              />
              <span className={styles.abilityKey}>Q</span>
            </div>
            <div 
              className={styles.abilityIcon}
              onMouseEnter={(e) => handleAbilityHover(e, WeaponType.SABRES, 'e')}
              onMouseLeave={handleAbilityLeave}
            >
              <Image 
                src="/icons/e3.svg"
                alt="E Ability"
                width={80}
                height={100}
                unoptimized
              />
              <span className={styles.abilityKey}>E</span>
            </div>
          </div>
        </div>

        <div className={styles.weaponContainer}>
          <div 
            className={`${styles.icon} ${selectedWeapon === WeaponType.SPEAR ? styles.selected : ''}`}
            onClick={() => onWeaponSelect(WeaponType.SPEAR)}
          >
            <div className={styles.iconContent}>
              <Image 
                src="/icons/q4.svg"
                alt="Spear"
                width={240}
                height={280}
                unoptimized
              />
            </div>
          </div>
          <div className={styles.abilityIcons}>
            <div 
              className={styles.abilityIcon}
              onMouseEnter={(e) => handleAbilityHover(e, WeaponType.SPEAR, 'q')}
              onMouseLeave={handleAbilityLeave}
            >
              <Image 
                src="/icons/q4.svg"
                alt="Q Ability"
                width={80}
                height={100}
                unoptimized
              />
              <span className={styles.abilityKey}>Q</span>
            </div>
            <div 
              className={styles.abilityIcon}
              onMouseEnter={(e) => handleAbilityHover(e, WeaponType.SPEAR, 'e')}
              onMouseLeave={handleAbilityLeave}
            >
              <Image 
                src="/icons/e4.svg"
                alt="E Ability"
                width={80}
                height={100}
                unoptimized
              />
              <span className={styles.abilityKey}>E</span>
            </div>
          </div>
        </div>

        <div className={styles.weaponContainer}>
          <div 
            className={`${styles.icon} ${selectedWeapon === WeaponType.BOW ? styles.selected : ''}`}
            onClick={() => onWeaponSelect(WeaponType.BOW)}
          >
            <div className={styles.iconContent}>
              <Image 
                src="/icons/5.svg"
                alt="Bow"
                width={240}
                height={280}
                unoptimized
              />
            </div>
          </div>
          <div className={styles.abilityIcons}>
            <div 
              className={styles.abilityIcon}
              onMouseEnter={(e) => handleAbilityHover(e, WeaponType.BOW, 'q')}
              onMouseLeave={handleAbilityLeave}
            >
              <Image 
                src="/icons/q5.svg"
                alt="Q Ability"
                width={80}
                height={100}
                unoptimized
              />
              <span className={styles.abilityKey}>Q</span>
            </div>
            <div 
              className={styles.abilityIcon}
              onMouseEnter={(e) => handleAbilityHover(e, WeaponType.BOW, 'e')}
              onMouseLeave={handleAbilityLeave}
            >
              <Image 
                src="/icons/e3.svg"
                alt="E Ability"
                width={80}
                height={100}
                unoptimized
              />
              <span className={styles.abilityKey}>E</span>
            </div>
          </div>
        </div>
      </div>

      <button 
        className={styles.startButton}
        onClick={onStart}
        disabled={!selectedWeapon}
      >
        Enter
      </button>

      {tooltipContent && (
        <Tooltip 
          content={tooltipContent}
          visible={!!tooltipContent}
          x={tooltipPosition.x}
          y={tooltipPosition.y}
        />
      )}
    </div>
  );
}

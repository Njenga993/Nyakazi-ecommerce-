// src/components/AboutSection.tsx

import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLeaf, FaSeedling, FaHandsHelping, FaPlayCircle } from 'react-icons/fa';
// Note: Make sure to install AOS package: npm install aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  
  // Add a function to handle scroll animations and counter effect
  useEffect(() => {
    // Counter animation
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counterElements = document.querySelectorAll('.counter');
          counterElements.forEach((counter) => {
            counter.classList.add('aos-animate');
          });
        }
      });
    };

    // Set up intersection observer for counter animation
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      observer.observe(statsContainer);
    }

    // Initialize AOS
    AOS.init({
      duration: 1000,      // Animation duration in ms
      easing: 'ease-out',  // Animation easing
      once: false,         // Whether animation should happen only once
      mirror: false,       // Whether elements should animate out while scrolling past them
      offset: 120,         // Offset (in px) from the original trigger point
    });
    
    // Animation for leaves
    const leaves = document.querySelectorAll('.floating-leaf');
    leaves.forEach((leaf) => {
      const leafElement = leaf as HTMLElement;
      leafElement.style.left = `${Math.random() * 100}%`;
      leafElement.style.animationDuration = `${Math.random() * 15 + 15}s`;
      leafElement.style.animationDelay = `${Math.random() * 5}s`;
    });
    
    // Clean up observer
    return () => {
      if (statsContainer) {
        observer.unobserve(statsContainer);
      }
    };
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.classList.add('active');
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', "https://www.youtube.com/embed/JjG-pl3N54Q?start=255&autoplay=1&enablejsapi=1");
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', 'true');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.borderRadius = '12px';
      
      // Clear the videoRef content first and then append the iframe
      if (videoRef.current.firstChild) {
        videoRef.current.innerHTML = '';
      }
      videoRef.current.appendChild(iframe);
    }
  };

  return (
    <AboutContainer id="about">
      {/* Animated leaves in background */}
      {[...Array(8)].map((_, index) => (
        <FloatingLeaf 
          key={index} 
          className="floating-leaf" 
          size={20 + Math.random() * 15}
          rotation={Math.random() * 360}
        >
          <FaLeaf />
        </FloatingLeaf>
      ))}

      <ContentWrapper>
        <TextContent data-aos="fade-up" data-aos-delay="100">
          <SectionTag data-aos="fade-up" data-aos-delay="200">Our Story</SectionTag>
          <MainHeading data-aos="fade-up" data-aos-delay="300">
            Rooted in Tradition, <GreenSpan>Growing</GreenSpan> for Tomorrow
          </MainHeading>
          
          <Paragraph data-aos="fade-up" data-aos-delay="400">
            Founded in 2023, <BrandHighlight>Nyakazi Organics</BrandHighlight> emerges as a pioneering 
            youth-led social enterprise that bridges generational wisdom with modern innovation. 
            Our mission is to reimagine African indigenous vegetables while preserving the rich agricultural 
            heritage that has sustained communities for centuries.
          </Paragraph>
          
          <Paragraph data-aos="fade-up" data-aos-delay="500">
            We've perfected the art of dehydration for treasured varieties including 
            <ProductHighlight> managu</ProductHighlight>, 
            <ProductHighlight> terere</ProductHighlight>, 
            <ProductHighlight> sagaa</ProductHighlight>, and premium 
            <ProductHighlight> Oyster Mushrooms</ProductHighlight> — locking in both exceptional 
            nutritional value and authentic flavor profiles that connect you to the land.
          </Paragraph>
          
          <MissionGrid>
            <MissionCard data-aos="fade-up" data-aos-delay="600">
              <MissionIcon><FaLeaf /></MissionIcon>
              <MissionTitle>For Our Customers</MissionTitle>
              <MissionText>
                Nutrient-dense, time-saving solutions for health-conscious modern lifestyles
              </MissionText>
            </MissionCard>
            
            <MissionCard data-aos="fade-up" data-aos-delay="700">
              <MissionIcon><FaSeedling /></MissionIcon>
              <MissionTitle>For Our Farmers</MissionTitle>
              <MissionText>
                Equitable markets and sustainable incomes for regenerative agriculture practitioners
              </MissionText>
            </MissionCard>
            
            <MissionCard data-aos="fade-up" data-aos-delay="800">
              <MissionIcon><FaHandsHelping /></MissionIcon>
              <MissionTitle>For Our Community</MissionTitle>
              <MissionText>
                Creating meaningful employment and growth opportunities for local youth
              </MissionText>
            </MissionCard>
          </MissionGrid>
        </TextContent>
        
        <VideoContent data-aos="fade-up" data-aos-delay="300">
          <VideoWrapper ref={videoRef} data-aos="fade-up" data-aos-delay="400">
            <VideoOverlay onClick={handleVideoClick}>
              <PlayButton>
                <FaPlayCircle />
              </PlayButton>
              <VideoText>Watch Our Story</VideoText>
            </VideoOverlay>
            <VideoThumbnail 
              src="/Managu-600x400.png" 
              alt="Nyakazi farming and production process"
            />
          </VideoWrapper>
          <VideoCaption data-aos="fade-up" data-aos-delay="500">
            See how we're transforming indigenous agriculture while empowering communities
          </VideoCaption>
          
          <StatsContainer data-aos="fade-up" data-aos-delay="600" className="stats-container">
            <StatItem>
              <StatNumber className="counter">500+</StatNumber>
              <StatLabel>Farmer Partners</StatLabel>
            </StatItem>
            <StatDivider />
            <StatItem>
              <StatNumber className="counter">12</StatNumber>
              <StatLabel>Product Varieties</StatLabel>
            </StatItem>
            <StatDivider />
            <StatItem>
              <StatNumber className="counter">35%</StatNumber>
              <StatLabel>Youth Employment</StatLabel>
            </StatItem>
          </StatsContainer>
        </VideoContent>
      </ContentWrapper>
    </AboutContainer>
  );
};

// Animations
const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  50% {
    transform: translateY(-100px) rotate(180deg);
    opacity: 0.5;
  }
  90% {
    opacity: 0.2;
  }
  100% {
    transform: translateY(-300px) rotate(360deg);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled Components
const AboutContainer = styled.section`
  padding: 7rem 2rem;
  background-color: #f9f8f3;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 50c-3 0-6-1-8-3l-8-8c-2-2-3-5-3-8s1-6 3-8l8-8c2-2 5-3 8-3s6 1 8 3l8 8c2 2 3 5 3 8s-1 6-3 8l-8 8c-2 2-5 3-8 3z' fill='%232e7d32' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
    z-index: 0;
  }
  
  /* Add counter animation */
  .counter {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .counter.aos-animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FloatingLeaf = styled.div<{ size: number; rotation: number }>`
  position: absolute;
  font-size: ${props => props.size}px;
  color: rgba(46, 125, 50, 0.1);
  transform: rotate(${props => props.rotation}deg);
  animation: ${float} 30s linear infinite;
  z-index: 1;
  pointer-events: none;
  
  /* Start leaves from bottom for better upward animation effect */
  bottom: -50px;
`;

// Main animations for component elements
const fadeUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  /* Base animation for all child elements when component is first rendered */
  & > * {
    animation: ${fadeUpAnimation} 0.8s ease-out forwards;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTag = styled.span`
  display: inline-block;
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 2px 10px rgba(46, 125, 50, 0.15);
`;

const MainHeading = styled.h2`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.8rem;
  color: #263238;
  
  @media (max-width: 992px) {
    font-size: 2.2rem;
  }
`;

const GreenSpan = styled.span`
  color: #2e7d32;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background-color: rgba(46, 125, 50, 0.2);
    border-radius: 3px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #455a64;
  margin-bottom: 1.5rem;
`;

const BrandHighlight = styled.span`
  color: #2e7d32;
  font-weight: 600;
`;

const ProductHighlight = styled.span`
  font-weight: 500;
  color: #1b5e20;
  margin: 0 0.2rem;
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
`;

const MissionCard = styled.div`
  background: white;
  padding: 1.8rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  border: 1px solid rgba(46, 125, 50, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(46, 125, 50, 0.15);
    border-color: rgba(46, 125, 50, 0.3);
  }
`;

const MissionIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e8f5e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2e7d32;
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.15);
`;

const MissionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  color: #263238;
  font-weight: 600;
`;

const MissionText = styled.p`
  font-size: 1rem;
  color: #546e7a;
  line-height: 1.7;
`;

const VideoContent = styled.div`
  position: relative;
`;

const VideoWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  aspect-ratio: 16 / 9;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &.active {
    cursor: default;
  }
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: opacity 0.3s ease;
  
  .active & {
    opacity: 0;
    pointer-events: none;
  }
`;

const PlayButton = styled.div`
  font-size: 5rem;
  color: white;
  opacity: 0.9;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  animation: ${pulse} 2s infinite ease-in-out;
  margin-bottom: 1rem;
`;

const VideoText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const VideoCaption = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #455a64;
  font-style: italic;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
`;

const StatItem = styled.div`
  text-align: center;
  flex: 1;
`;

// Adding a new counter animation effect
const countUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Enhancing the stat number with animation
const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 0.3rem;
  position: relative;
  
  &.aos-animate {
    animation: ${countUp} 1.5s forwards;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background-color: rgba(46, 125, 50, 0.3);
    border-radius: 1px;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #546e7a;
`;

const StatDivider = styled.div`
  height: 40px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default AboutSection;
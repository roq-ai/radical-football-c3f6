import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Academy Owner'];
  const roles = ['Parent', 'Academy Owner', 'Coach', 'Player'];
  const applicationName = 'radical-football42';
  const tenantName = 'Academy';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Role: Coach

1. As a coach, I want to be able to create and manage individual player profiles so that I can keep track of each player's progress and development.

2. As a coach, I want to be able to assign specific training exercises and drills to individual players based on their skill level and areas for improvement, so that I can help them develop more effectively.

3. As a coach, I want to be able to monitor and track each player's performance in training sessions and matches, so that I can provide targeted feedback and guidance for their development.

4. As a coach, I want to be able to communicate with players and their parents through the platform, so that I can keep them informed about their progress and any upcoming events or matches.

5. As a coach, I want to be able to schedule and manage team training sessions, matches, and other events, so that I can ensure all players are aware of their commitments and can plan accordingly.

6. As a coach, I want to be able to access and analyze player performance data and statistics, so that I can make informed decisions about team selection and tactics.

Role: Player

1. As a player, I want to be able to access and update my individual player profile, so that I can track my own progress and development.

2. As a player, I want to be able to view and complete assigned training exercises and drills, so that I can improve my skills and contribute more effectively to the team.

3. As a player, I want to be able to receive feedback and guidance from my coach through the platform, so that I can understand my strengths and areas for improvement.

4. As a player, I want to be able to communicate with my coach and teammates through the platform, so that I can stay informed about team news and events.

5. As a player, I want to be able to view my performance data and statistics, so that I can set personal goals and track my progress over time.

6. As a player, I want to be able to access the team's schedule for training sessions, matches, and other events, so that I can plan my time effectively and ensure I am available for all commitments.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="30px" bottom="20px" zIndex={3}>
      <Popover placement="top-end">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent w="50vw" h="70vh">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

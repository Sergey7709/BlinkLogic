import { Box, Group, Text } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { ButtonPanel } from '@/components/Header/ButtonPanel';
import { useMediaQuery } from '@mantine/hooks';

export const Header = () => {
  const matches = useMediaQuery('(max-width: 30rem)');
  return (
    <Box p={20}>
      <header>
        <Group justify="space-between" h="100%">
          <Text
            flex={1}
            tt="uppercase"
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: 'indigo', to: 'teal', deg: 191 }}
          >
            Short Link Manager
          </Text>
          <Group gap={matches ? 20 : 30} justify={matches ? 'flex-start' : 'flex-end'}>
            <ColorSchemeToggle />
            <ButtonPanel />
          </Group>
        </Group>
      </header>
    </Box>
  );
};

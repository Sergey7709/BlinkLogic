import { Box, Group, Text } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { ButtonPanel } from '@/components/Header/ButtonPanel';

export const Header = () => (
  <Box p={20}>
    <header>
      <Group justify="space-between" h="100%">
        <Group>
          <Text
            size="lg"
            fw={900}
            variant="gradient"
            gradient={{ from: 'violet', to: 'rgba(31, 148, 95, 0.99)', deg: 167 }}
          >
            THEME MODE:
          </Text>
          <ColorSchemeToggle />
        </Group>
        <ButtonPanel />
      </Group>
    </header>
  </Box>
);

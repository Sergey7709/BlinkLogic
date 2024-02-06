import { Box, Button, Group, Text } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';

export const Header = () => (
    <Box p={15}>
    <header>
        <Group justify="space-between" h="100%">
            <Group>
                <Text
                  size="lg"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: 'violet', to: 'rgba(31, 148, 95, 0.99)', deg: 167 }}
                >THEME MODE:
                </Text>
                <ColorSchemeToggle />
            </Group>
            <Group>
                <Button w={100} color="teal">Log in</Button>
                <Button w={100}>Sign up</Button>
            </Group>
        </Group>
    </header>
    </Box>
   );

import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group align="center" justify="center">
      <Button color="yellow" size="xs" onClick={() => setColorScheme('light')}>Light</Button>
      <Button color="black" size="xs" onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button color="indigo" size="xs" onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}

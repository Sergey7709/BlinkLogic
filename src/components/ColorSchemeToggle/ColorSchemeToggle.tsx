import { Button, ButtonGroup, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <ButtonGroup>
      <Button color="yellow" size="xs" onClick={() => setColorScheme('light')}>
        Light
      </Button>
      <Button color="black" size="xs" onClick={() => setColorScheme('dark')}>
        Dark
      </Button>
      <Button color="indigo" size="xs" onClick={() => setColorScheme('auto')}>
        Auto
      </Button>
    </ButtonGroup>
  );
}

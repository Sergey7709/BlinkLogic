import { hasLength, useForm } from '@mantine/form';
import { ActionIcon, Box, Group, rem, Text, TextInput } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useCreateShortLink } from '@/service/hooks/useCreateShortLink';
import { useEffect, useState } from 'react';

export const ShortLinkCreator = () => {
  const form = useForm({
    initialValues: {
      link: '',
    },

    validate: {
      link: hasLength({ min: 1, max: 65536 }, 'Link must be 1-65536 characters long'),
    },
  });

  const { mutateAsync } = useCreateShortLink();

  const [infoSubmit, setInfoSubmit] = useState('');

  useEffect(() => {
    if (infoSubmit) {
      const timeout = setTimeout(() => {
        setInfoSubmit('');
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [infoSubmit]);

  const handleCreateShortLink = async (values: string) => {
    try {
      await mutateAsync(values);
      form.reset();
      setInfoSubmit('Success');
    } catch {
      setInfoSubmit('Error submit');
    }
  };

  return (
    <Box
      component="form"
      mx="auto"
      onSubmit={form.onSubmit((values) => {
        handleCreateShortLink(values.link);
      })}
    >
      <Group justify="flex-start" mt="md" align="end">
        <TextInput
          w={300}
          radius="xs"
          label="Create short link"
          placeholder="Insert the original link"
          rightSection={
            <ActionIcon type="submit" size={32} radius="xs" color="green" variant="filled">
              <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          }
          {...form.getInputProps('link')}
        />
      </Group>
      {!!infoSubmit && (
        <Text size="md" c={infoSubmit === 'Success' ? 'green' : 'red'}>
          {infoSubmit}
        </Text>
      )}
    </Box>
  );
};

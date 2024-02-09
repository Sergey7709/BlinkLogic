import { hasLength, useForm } from '@mantine/form';
import { ActionIcon, Box, Group, rem, TextInput } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useCreateShortLink } from '@/service/hooks/useCreateShortLink';

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

  const handleCreateShortLink = async (values: string) => {
    await mutateAsync(values);
    form.reset();
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
    </Box>
  );
};

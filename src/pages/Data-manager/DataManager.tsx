import { Box, Container, Flex, Space } from '@mantine/core';

import { Table } from '@/components/Table/Table';
import { ShortLinkCreator } from '@/components/ShortLinkCreator';

export function DataManager() {
  return (
    <>
      <Container p={10} mt={100}>
        <Flex
          direction={{ base: 'column' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'center' }}
        >
          <Box>
            <ShortLinkCreator />
            <Space h={20} />
          </Box>
          <Table />
        </Flex>
      </Container>
    </>
  );
}

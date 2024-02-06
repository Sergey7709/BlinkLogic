import { Container, Flex } from '@mantine/core';

import { Table } from '@/components/Table/Table';

export function LinksTable() {
  return (
    <>
        <Container p={10} mt={100}>
        <Flex
          direction={{ base: 'column' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'center' }}
        >
      <Table />
        </Flex>
        </Container>
    </>
  );
}

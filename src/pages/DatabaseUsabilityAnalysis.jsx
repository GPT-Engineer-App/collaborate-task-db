import { Box, Heading, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

const DatabaseUsabilityAnalysis = () => {
  return (
    <Box p={useBreakpointValue({ base: 4, md: 8 })}>
      <Heading as="h1" mb={6}>Database Usability Analysis</Heading>
      <VStack spacing={4} align="start">
        <Text fontSize="lg">
          <strong>groups</strong>
          <br />
          - <strong>id</strong>: Primary key, required.
          <br />
          - <strong>group_id</strong>: UUID, optional. Consider making this required if it is used as a foreign key elsewhere.
          <br />
          - <strong>group_name</strong>: Required, varchar(100). Ensure unique constraint if group names must be unique.
          <br />
          - <strong>description</strong>: Optional text field.
          <br />
          - <strong>created_at</strong> & <strong>updated_at</strong>: Timestamps, optional but useful for tracking changes.
        </Text>
        
        <Text fontSize="lg">
          <strong>tasks</strong>
          <br />
          - <strong>task_id</strong>: Primary key, required.
          <br />
          - <strong>user_id</strong>: Required, foreign key to users table.
          <br />
          - <strong>title</strong>: Required, varchar(255).
          <br />
          - <strong>description</strong>: Optional text field.
          <br />
          - <strong>category_id</strong>: Optional, foreign key to categories table.
          <br />
          - <strong>priority</strong>, <strong>status</strong>: Optional varchar(50). Consider using ENUM for predefined values.
          <br />
          - <strong>due_date</strong>, <strong>created_at</strong>, <strong>updated_at</strong>: Timestamps, useful for tracking.
        </Text>
        
        <Text fontSize="lg">
          <strong>profiles</strong>
          <br />
          - <strong>profile_id</strong>: Primary key, required.
          <br />
          - <strong>user_id</strong>: Required, foreign key to users table.
          <br />
          - <strong>bio</strong>: Optional text field.
          <br />
          - <strong>avatar_url</strong>: Optional varchar(255).
          <br />
          - <strong>created_at</strong>, <strong>updated_at</strong>: Timestamps, useful for tracking.
        </Text>
        
        <Text fontSize="lg">
          <strong>task_tags</strong>
          <br />
          - <strong>task_id</strong>: Required, foreign key to tasks table.
          <br />
          - <strong>tag_id</strong>: Required, foreign key to tags table.
        </Text>
        
        <Text fontSize="lg">
          <strong>files</strong>
          <br />
          - <strong>id</strong>: Primary key, required.
          <br />
          - <strong>file_id</strong>: Optional UUID.
          <br />
          - <strong>uploader_id</strong>: Required, foreign key to users table.
          <br />
          - <strong>file_name</strong>: Required text field.
          <br />
          - <strong>file_type</strong>, <strong>file_size</strong>: Optional fields.
          <br />
          - <strong>upload_date</strong>: Optional timestamp.
          <br />
          - <strong>version</strong>: Optional integer.
          <br />
          - <strong>is_active</strong>: Optional boolean.
          <br />
          - <strong>group_id</strong>: Optional, foreign key to groups table.
        </Text>
        
        <Text fontSize="lg">
          <strong>comments</strong>
          <br />
          - <strong>comment_id</strong>: Primary key, required.
          <br />
          - <strong>task_id</strong>: Required, foreign key to tasks table.
          <br />
          - <strong>user_id</strong>: Required, foreign key to users table.
          <br />
          - <strong>content</strong>: Required text field.
          <br />
          - <strong>created_at</strong>: Optional timestamp.
        </Text>
        
        <Text fontSize="lg">
          <strong>tags</strong>
          <br />
          - <strong>tag_id</strong>: Primary key, required.
          <br />
          - <strong>name</strong>: Required varchar(50).
        </Text>
        
        <Text fontSize="lg">
          <strong>users</strong>
          <br />
          - <strong>id</strong>: Primary key, required.
          <br />
          - <strong>user_id</strong>: Optional UUID.
          <br />
          - <strong>username</strong>: Required varchar(100). Ensure unique constraint.
          <br />
          - <strong>group_id</strong>: Optional, foreign key to groups table.
          <br />
          - <strong>created_at</strong>, <strong>updated_at</strong>: Timestamps, useful for tracking.
          <br />
          - <strong>email</strong>: Required varchar(100). Ensure unique constraint.
          <br />
          - <strong>password_hash</strong>: Required varchar(255).
          <br />
          - <strong>first_name</strong>, <strong>last_name</strong>: Optional varchar(50).
        </Text>
        
        <Text fontSize="lg">
          <strong>sessions</strong>
          <br />
          - <strong>session_id</strong>: Primary key, required.
          <br />
          - <strong>user_id</strong>: Required, foreign key to users table.
          <br />
          - <strong>token</strong>: Required varchar(255).
          <br />
          - <strong>created_at</strong>, <strong>expires_at</strong>: Optional timestamps.
        </Text>
        
        <Text fontSize="lg">
          <strong>categories</strong>
          <br />
          - <strong>category_id</strong>: Primary key, required.
          <br />
          - <strong>name</strong>: Required varchar(50).
        </Text>
      </VStack>
    </Box>
  );
};

export default DatabaseUsabilityAnalysis;
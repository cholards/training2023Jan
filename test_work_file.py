import unittest

from work_file import reverse


class TestReverse(unittest.TestCase):
    
    def test_if_empty_string_will_return_empty_output(self):
        # Arrange
        my_string = ''
        #Act
        result = reverse(my_string)
        # Assert
        self.assertEqual(result, "")
        
    def test_if_single_string_will_return_empty_output(self):
        # Arrange
        my_string = 'a'
        #Act
        result = reverse(my_string)
        # Assert
        self.assertEqual(result, "a")
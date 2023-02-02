from rest_framework import serializers
# string_field = serializers.CharField(required=True)
#     number_field = serializers.IntegerField(required=True)
#     float_field = serializers.FloatField(required=True)
#     dict_field = NestedSerializer(required=True)
#     url_field = serializers.URLField(required=True)
#     email_field = serializers.EmailField(required=True)
#     date_field = serializers.DateField(required=True)
#     time_field = serializers.TimeField(required=True)
#     list_field = serializers.ListField(required=True)
class userser(serializers.Serializer):
    nom = serializers.CharField(required = True , max_length=40)
    prenom = serializers.CharField(required = True , max_length=40)
    sim1 = serializers.CharField(max_length = 10 ,  required =True )
    sim2 = serializers.CharField(max_length = 10 ,  required =False )
    